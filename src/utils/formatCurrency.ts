const formatCurrency = (value) => {
  if (!value) return ''

  return `$${Number(value).toLocaleString()}`
}

export default formatCurrency
