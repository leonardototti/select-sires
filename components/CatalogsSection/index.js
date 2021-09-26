import { Section, CatalogTitle } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from 'react-bootstrap'

export default function CatalogsSection() {
  return (
    <Section>
      <Container>
        <CatalogTitle>Catálogos</CatalogTitle>
          <Swiper 
            spaceBetween={20}
            slidesPerView={4}
          >
            <SwiperSlide>
              <img src="/slider/catalogs-slider/01.png" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/catalogs-slider/02.png" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/catalogs-slider/03.png" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/catalogs-slider/04.png" width="100%" />
            </SwiperSlide>
          </Swiper>
      </Container>
    </Section>
  )
}