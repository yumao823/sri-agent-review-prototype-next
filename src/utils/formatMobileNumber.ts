const formatMobileNumber = (mobile: string): string => (mobile ? `+65 ${mobile.slice(0, 4)} ${mobile.slice(4)}` : '')

export default formatMobileNumber
