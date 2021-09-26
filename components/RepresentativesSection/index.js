import { Section, SectionTitle, SelectStateContainer, SelectState, ToggleMap } from './styles'
import { Container } from 'react-bootstrap'
import { useState } from 'react'

export default function RepresentativesSection() {
  const [showMap, setShowMap] = useState(false);

  function handleToggleShowMap() {
    setShowMap(!showMap);
  }

  return (
    <Section>
      <Container>
        <SectionTitle>Encontre o seu Representante</SectionTitle>
        <SelectStateContainer>
          <SelectState>
            Selecione o Estado
            <img src="/icons/map-arrow-down.png" />
          </SelectState>
        </SelectStateContainer>
        <div className="toggle-map-container">
          <ToggleMap onClick={handleToggleShowMap}>{showMap ? 'Ocultar mapa' : 'Exibir mapa'}</ToggleMap>
        </div>
      </Container>
    </Section>
  )
}