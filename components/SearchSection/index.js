import { Container, Col, Row } from 'react-bootstrap'
import { Section, Select } from './styles'

export default function SearchSection() {
  return (
    <>
      <Section>
        <Container>
          <h2>Busca de touros</h2>
          <Row>
            <Col md={6}>
              <Select>
                <img src="/icons/searchbull01.svg" width="70px" height="auto" alt="Ícone de touros de corte" />
                <span>Touros corte</span>
                <img src="/icons/search-arrow-down.svg" className="arrow-down" width="10px" height="auto" />
              </Select>
            </Col>
            <Col md={6}>
              <Select >
                <img src="/icons/searchbull02.svg" width="70px" height="auto" alt="Ícone de touros de leite" />
                <span>Touros leite</span>
                <img src="/icons/search-arrow-down.svg" className="arrow-down" width="10px" height="auto" />
              </Select>
            </Col>
          </Row>

        </Container>
      </Section>
    </>
  )
}