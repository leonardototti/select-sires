import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import { Container } from 'react-bootstrap'
import { Section, HeaderContainer, SeeMore, ImageContainer, NewsTitle, NewsLink, SliderButtonsContainer } from './styles'

export default function NewsSection() {
  return (
    <Section>
      <Container>
        <HeaderContainer>
          <h2><strong>Notícias</strong> Select Sires</h2>
          <SeeMore href="#">Ver todos as notícias</SeeMore>
        </HeaderContainer>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true, el: '.slider-pagination' }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3
            }
          }}
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

          <SliderButtonsContainer>
            <div className="slider-pagination">

            </div>
          </SliderButtonsContainer>

          <SeeMore responsive href="#">Ver todos as notícias</SeeMore>
        </Swiper>
      </Container>
    </Section>
  )
}