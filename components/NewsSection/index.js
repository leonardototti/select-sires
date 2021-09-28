import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from 'react-bootstrap'
import { Section, HeaderContainer, SeeMore, ImageContainer, NewsTitle, NewsLink } from './styles'

export default function NewsSection() {
  return (
    <Section>
      <Container>
        <HeaderContainer>
          <h2><strong>Notícias</strong> Select Sires</h2>
          <SeeMore href="#">Ver todos as notícias</SeeMore>
        </HeaderContainer>
        <Swiper 
          spaceBetween={20}
          slidesPerView={3}
        >
          <SwiperSlide>
            <ImageContainer>
              <img src="/slider/news-slider/01.png" width="100%" />
              <NewsLink href="#" className="news-link">Ler notícia completa</NewsLink>
            </ImageContainer>
            <NewsTitle>Select Sires do Brasil realiza terceira importação de touros Aberdeen Angus vivos dos EUA desde 2019</NewsTitle>
          </SwiperSlide>

          <SwiperSlide>
            <ImageContainer>
              <img src="/slider/news-slider/02.png" width="100%" />
              <NewsLink href="#" className="news-link">Ler notícia completa</NewsLink>
            </ImageContainer>
            <NewsTitle>Grande Campeã da raça holandesa na Expointer são é filha de touro Select Sires</NewsTitle>
          </SwiperSlide>

          <SwiperSlide>
            <ImageContainer>
              <img src="/slider/news-slider/03.png" width="100%" />
              <NewsLink href="#" className="news-link">Ler notícia completa</NewsLink>
            </ImageContainer>
            <NewsTitle>Genética Select Sires se destaca pela qualidade de produção e longevidade</NewsTitle>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Section>
  )
}