import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Container } from 'react-bootstrap';

const Section = styled.section`
  width: 100%;
  padding: 60px 0px 35px;

  h2 {
    margin: 0!important;
    font-family: Inter;
    font-weight: 300;
    color: #000;
    font-size: 30px;
  }

  img {
    user-select: none;
    pointer-events: none;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`

const SeeMore = styled.a`
  color: #ed1c24;
  text-transform: uppercase;
  text-align: right;
  font-family: Inter;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
`

const BullName = styled.h3`
  color: #000;
  font-family: Inter;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
  margin: 0;
  margin-top: 25px;
  letter-spacing: 1px;
  user-select: none;
  pointer-events: none;
`

const SliderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 60px;

  div {
    margin: 0 5px;
    padding: 10px;
    display: grid;
    place-items: center;
    user-select: none;
    cursor: pointer;
    
    img {
      cursor: pointer;
    }
  }
`

export default function HighlightsSection() {
  return (
    <>
      <Section id="highlights-section">
        <Container>
          <HeaderContainer>
            <h2><strong>Destaques</strong> da semana</h2>
            <SeeMore href="#">Ver todos os touros</SeeMore>
          </HeaderContainer>
          <Swiper 
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={3}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation={{ 
              nextEl: '.slider-button-next',
              prevEl: '.slider-button-last'
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <img src="/slider/highlights-slider/01.png" width="100%" height="auto"/>
              <BullName>GENGIS KHAN DE BRAS.</BullName>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/02.png" width="100%" height="auto"/>
              <BullName>DUQUESA FIV</BullName>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/03.png" width="100%" height="auto"/>
              <BullName>GENGIS KHAN DE BRAS.</BullName>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/01.png" width="100%" height="auto"/>
              <BullName>GENGIS KHAN DE BRAS.</BullName>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/02.png" width="100%" height="auto"/>
              <BullName>DUQUESA FIV</BullName>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/03.png" width="100%" height="auto"/>
              <BullName>GENGIS KHAN DE BRAS.</BullName>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/01.png" width="100%" height="auto"/>
              <BullName>GENGIS KHAN DE BRAS.</BullName>
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
    </>
  )
}