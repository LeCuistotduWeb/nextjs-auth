/**
 * @param value
 * @returns {*}
 */
export const priceFormatted = (value) => {
  return Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
}

/**
 * @param value
 * @returns {string}
 */
export const surfaceFormatted = (value) => {
  return value + "m²";
}