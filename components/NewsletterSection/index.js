import { Container } from 'react-bootstrap'
import { Section, NewsletterTitle, NewsletterSubTitle, NewsletterJoin } from './styles'

export default function NewsletterSection() {
  return (
    <Section>
      <Container>
        <NewsletterTitle>Receba nossas novidades</NewsletterTitle>
        <NewsletterSubTitle>Cadastre-se e seja um dos primeiros a saber de todas as novidades.</NewsletterSubTitle>
        <div className="button-container">
          <NewsletterJoin>Cadastre-se</NewsletterJoin>
        </div>
        {/* <img className="newsletter-background" src="/newsletter-background.svg" width="350px" /> */}
      </Container>
    </Section>
  )
}