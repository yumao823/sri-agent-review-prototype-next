const getIsUpperCase = (str) => {
  if (typeof str === 'string') {
    return str === str.toUpperCase()
  }

  return false
}

export default getIsUpperCase
