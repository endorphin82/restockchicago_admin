export const priceStringToIntCent = (str: string) => {
  return Math.round(100 * parseFloat(str.replace(/[$,]/g, '')));
}
export const priceToDollars = (price: any) => {
  return Number(price / 100)
    .toLocaleString("en-US", { style: "currency", currency: "USD" })
}

export function toArray<T>(candidate?: T | T[] | false): T[] {
  if (candidate === undefined || candidate === false) return [];

  return Array.isArray(candidate) ? candidate : [candidate];
}
