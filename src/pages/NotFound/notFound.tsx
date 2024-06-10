import { Container } from '../../components/Container/container'
import { NotFoundStyles } from './NotFound.styles'

export function NotFound() {
  return (
    <NotFoundStyles>
      <Container>
        <h1>Ops... Página não encontrada!</h1>
        <p>404</p>
      </Container>
    </NotFoundStyles>
  )
}
