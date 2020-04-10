export const priceStringToIntCent = str => {
  return Math.round(100 * parseFloat(str.replace(/[$,]/g, '')));
}
export const priceToDollars = price => {
  return Number(price / 100)
    .toLocaleString("en-US", { style: "currency", currency: "USD" })
}