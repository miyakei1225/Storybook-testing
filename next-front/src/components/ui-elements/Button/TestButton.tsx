import { Button } from '@chakra-ui/react'
import React from 'react'

type Props = {
  text: string
  color: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const TestButton: React.FC<Props> = ({ text, color, onClick }) => {
  return (
    <Button bgColor={color} onClick={onClick}>
      {text}
    </Button>
  )
}

export default TestButton
