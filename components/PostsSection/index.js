import { Section, PostTitle, SliderButtonsContainer } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Container } from 'react-bootstrap'

export default function PostsSection() {
  return (
    <Section id="posts-section">
      <Container>
        <PostTitle>Postagens</PostTitle>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation={{ 
              nextEl: '.slider-button-next',
              prevEl: '.slider-button-last'
            }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img src="/slider/posts-slider/01.png" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/posts-slider/02.png" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/posts-slider/01.png" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/posts-slider/02.png" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/posts-slider/01.png" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/posts-slider/02.png" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/posts-slider/01.png" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/posts-slider/02.png" width="100%" />
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