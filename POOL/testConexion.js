import { pool } from "./db.js"

export async function showOrderMovies() {
    try {
        const res = await pool.query('SELECT * FROM genres')
        console.log(res.rows)

        return res
    } catch (error) {
        console.error(error.message)
    }
}
showOrderMovies();
