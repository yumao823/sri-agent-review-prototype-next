import React from 'react'

type FormProviderProps = React.HTMLAttributes<HTMLFormElement>

const Form: React.FC<FormProviderProps> = (props) => {
  return <form {...props} />
}

export default Form
