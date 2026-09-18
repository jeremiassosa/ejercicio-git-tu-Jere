    import { syncBuiltinESMExports } from "node:module";
    import { pool } from "./db.js";

    export async function PostGenre(req, res) {    
        try {

            const { name } = req.body;

            const queryText = 'INSERT INTO genres (name) VALUES ($1)'
            const values = [name]
            const content = await pool.query(queryText, values)
            
            res.status(201).json({
                mensage: `Creado Corectamente ${name}`
            });
            return res
        }
        catch (error)
        {
            res.status(500).json({ error: error.message });
        }
    }
    export async function PostMovies(req, res) {
        const { title, synopsis , trailer_url, realease_year } = req.body;
        if (!title) return res.status(400).json({ error: 'Escribi un Titulo' });
        if (!synopsis) return res.status(400).json({ error: 'Escribi un Synopsis' });
        if (!trailer_url) return res.status(400).json({ error: 'Escribi un link de Triler' });
        if (!realease_year) return res.status(400).json({ error: 'Escribi un Fecha de Lanzamiento' });

        try {
            const values = [title, synopsis, trailer_url, realease_year]
            const queryText =`INSERT INTO movies (title, synopsis, trailer_url, realease_year) VALUES ($1, $2, $3, $4)`
            const content = await pool.query(queryText, values)

            res.status(201).json({
                mensage: `Creado Corectamente ${values}`
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    export async function GetMovies(req, res) {
        try {
            const result = await pool.query('SELECT * FROM movies');
            res.json(result.rows);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    export async function GetGenres(req, res) {
        try {
            const result = await pool.query('SELECT * FROM genres');
            res.json(result.rows);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    export async function DeleteMovies(req, res) { 
        
        // La funcion delete no funciona :c (tengo que seguir con los demas ejercicios)
        const { id } = req.params; 

        try {
            const queryText = 'DELETE FROM movies WHERE $1';
            const result = await pool.query(queryText, [id]);

            if (result.rowCount === 0) {
                return res.status(404).json({ error: 'Película no encontrada' });
            }
            res.status(200).json({
                mensaje: `Película ${id} eliminada correctamente`
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
}

