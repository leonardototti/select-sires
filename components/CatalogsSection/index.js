import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import { Section, CatalogTitle, CatalogDownload, SliderButtonsContainer } from './styles'
import { Container } from 'react-bootstrap'

export default function CatalogsSection() {
  return (
    <Section>
      <Container>
        <CatalogTitle>Catálogos</CatalogTitle>
          <Swiper 
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1.4}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{ clickable: true }}
            centeredSlides={true}
            breakpoints={{
              576: {
                slidesPerView: 2,
                centeredSlides: false
              },
              992: {
                slidesPerView: 4,
                centeredSlides: false
              }
            }}
          >
            <SwiperSlide>
              <img src="/slider/catalogs-slider/01.png" width="100%" />
              <CatalogDownload href="#" className="catalog-download">
                Baixar catálogo
              </CatalogDownload>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/catalogs-slider/02.png" width="100%" />
              <CatalogDownload href="#" className="catalog-download">
                Baixar catálogo
              </CatalogDownload>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/catalogs-slider/03.png" width="100%" />
              <CatalogDownload href="#" className="catalog-download">
                Baixar catálogo
              </CatalogDownload>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/catalogs-slider/04.png" width="100%" />
              <CatalogDownload href="#" className="catalog-download">
                Baixar catálogo
              </CatalogDownload>
            </SwiperSlide>

            <SliderButtonsContainer>
              <div className="slider-button-last">
                <img src="/icons/slider-arrow-left.svg" width="29px" height="23px" />
              </div>
              <div className="slider-button-next">
                <img src="/icons/slider-arrow-right.svg" width="29px" height="23px" />
              </div>
            </SliderButtonsContainer>
          </Swiper>
      </Container>
    </Section>
  )
}