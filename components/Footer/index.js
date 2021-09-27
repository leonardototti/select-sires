import { Section, FooterTitle, FooterAddress, FooterAddressButton, FooterPhoneTitle, FooterPhone, FooterPageLinks, FooterPageLink, FooterSocialLinks, FooterSocialLink, FooterCopyright, LanguageSelector, BackToTop } from './styles'
import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <Section>
      <Container>
        <FooterTitle>Select Sires do Brasil</FooterTitle>
        <FooterAddress>Rua São Nicolau 230, pavilhão 6B, Bairro Santa Maria Goretti - Porto Alegre, RS</FooterAddress>
        <div className="button-container">
          <FooterAddressButton href="https://goo.gl/maps/ZniwkMxTkJ7ciGET8" target="_blank" rel="noopener noreferrer">Mostrar no mapa<img src="/icons/address-arrow.png" /></FooterAddressButton>
        </div>

        <FooterPhoneTitle>Nosso telefone</FooterPhoneTitle>
        <div className="button-container">
          <FooterPhone href="tel:+555132229688">(51) 3222-9688</FooterPhone>
        </div>

        <hr />

        <FooterPageLinks>
          <FooterPageLink>
            <a href="#">
              Política de privacidade
            </a>
          </FooterPageLink>
          <FooterPageLink>
            <a href="#">
              Formulário de acasalamento e genética
            </a>
          </FooterPageLink>
          <FooterPageLink>
            <a href="#">
              Encontre um representante
            </a>
          </FooterPageLink>
          <FooterPageLink>
            <a href="#">
              Trabalhe conosco
            </a>
          </FooterPageLink>
        </FooterPageLinks>

        <FooterSocialLinks>
          <FooterSocialLink href="" target="_blank" rel="noopener noreferrer">
            <img src="/icons/footer/facebook.png" />
          </FooterSocialLink>
          <FooterSocialLink href="" target="_blank" rel="noopener noreferrer">
            <img src="/icons/footer/instagram.png" />
          </FooterSocialLink>
          <FooterSocialLink href="" target="_blank" rel="noopener noreferrer">
            <img src="/icons/footer/youtube.png" />
          </FooterSocialLink>
        </FooterSocialLinks>

        <FooterCopyright>
          <a href="https://clickweb.com.br" target="_blank" rel="noopener noreferrer">
            <img src="/clickweb-logo.png" />
          </a>
        </FooterCopyright>
      </Container>
      <LanguageSelector>
        Português
        <img src="/icons/language-arrow.png" width="8px" height="6px" />
      </LanguageSelector>
      <BackToTop href="#">
    	  <img src="/icons/backtotop-arrow.svg" width="23px" height="29px" />
      </BackToTop>
    </Section>
  )
}