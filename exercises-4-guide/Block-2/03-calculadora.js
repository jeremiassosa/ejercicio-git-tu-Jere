function calculateFinalPrice(basePrice, isVIP) {
  let finalPrice;

  if (isVIP) {
    finalPrice = basePrice * 0.90;
  } else {
    finalPrice = basePrice * 1.21;
  }

  return {
    finalPrice
  }
}

console.log('VIP:', calculateFinalPrice(2000, true));
console.log('not VIP', calculateFinalPrice(1000, false));
