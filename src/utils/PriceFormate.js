export const priceFormate = (number)=>{
   return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number * 86.56)
}
