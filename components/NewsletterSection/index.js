import { Container } from "react-bootstrap";
import {
  Section,
  NewsletterTitle,
  NewsletterSubTitle,
  NewsletterJoin,
} from "./styles";

export default function NewsletterSection({ onOpenNewsletterModal }) {
  return (
    <Section>
      <Container>
        <NewsletterTitle>Receba nossas novidades</NewsletterTitle>
        <NewsletterSubTitle>
          Cadastre-se e seja um dos primeiros a saber de todas as novidades.
        </NewsletterSubTitle>
        <div className="button-container">
          <NewsletterJoin onClick={onOpenNewsletterModal}>
            Cadastre-se
          </NewsletterJoin>
        </div>
      </Container>
    </Section>
  );
}
