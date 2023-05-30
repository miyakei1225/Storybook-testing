import React from 'react'

export type ButtonProps = {
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonProps> = ({ children, onClick = () => {} }) => {
  return <Button onClick={onClick}>{children}</Button>
}
