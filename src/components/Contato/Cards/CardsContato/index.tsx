import { IconType } from 'react-icons'
import { ThemeProvider } from 'styled-components'
import { Card, Title, Text } from './styles'
interface CardsContatoProps {
  icon: IconType
  title: string
  description: string
  purple?: boolean
}

export default function CardsContato({
  icon,
  title,
  description,
  purple
}: CardsContatoProps) {
  const theme = {
    bg: purple ? '#E6D9FA' : 'transparent',
    bgBorder: purple ? 'var(--purple-light)' : '#A9EAEE'
  }

  const Icon = icon
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Icon size={55} className="Icon" />
        <Title>{title}</Title>
        <Text>{description}</Text>
      </Card>
    </ThemeProvider>
  )
}
