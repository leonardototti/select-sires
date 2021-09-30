import {
  Section,
  AboutTitle,
  AboutSubtitle,
  AboutDescription,
  AboutButton,
} from "./styles";
import { Container } from "react-bootstrap";

export default function AboutSection() {
  return (
    <Section>
      <Container>
        <AboutTitle>Sobre nós</AboutTitle>
        <AboutSubtitle>
          A SELECT SIRES DO BRASIL é uma empresa dedicada ao melhoramento
          genético de bovinos de produção, com foco principal nas raças de
          origem Europeia.
        </AboutSubtitle>
        <AboutDescription>
          Além de comercializar a melhor genética bovina disponível no mundo, a
          Select Sires do Brasil conta com uma equipe de representantes
          comerciais que passam por treinamentos periódicos para desempenharem a
          campo um serviço de qualidade no assessoramento de como utilizar essa
          genética potencializando os resultados a campo.
        </AboutDescription>
        <div className="button-container">
          <AboutButton>Saiba mais</AboutButton>
        </div>
      </Container>
    </Section>
  );
}
