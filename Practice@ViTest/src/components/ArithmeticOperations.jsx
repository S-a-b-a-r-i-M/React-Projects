

const sum = (...numbers) => {
  let total = 0
  numbers.forEach((num) => {
    if(typeof num !== 'number' || Number.isNaN(num)) 
      return null
    console.log(num);
    
    total += num
  })
}

const subtract = (...numbers) => {
  if(numbers.length === 0) return 0

  return parseFloat(numbers.reduce((total, num) => total -= num).toFixed(1))
}

export {sum, subtract}