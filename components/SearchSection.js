import styled from 'styled-components'
import { Container, Col, Row } from 'react-bootstrap';

const Section = styled.section`
  background-color: #f8f8f8;
  padding: 50px 20px 60px;

  h2 {
    color: #000;
    font-family: Inter;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    margin: 0;
    margin-bottom: 25px;
  }
`

const Select = styled.button`
  border: 0;
  background-color: #fff;
  border-radius: 30px;
  padding: 15px 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;

  span {
    color: #000;
    font-family: Inter;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    margin-left: 10px;
  }

  .arrow-down {
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
  }
`

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