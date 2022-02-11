const MAX_INITIALS_LENGTH = 2

const getAvatarPlaceholderText = (name) => {
  if (!name) return null

  return name
    .split(' ')
    .slice(0, MAX_INITIALS_LENGTH)
    .map((word) => word[0])
    .join('')
}

export default getAvatarPlaceholderText
