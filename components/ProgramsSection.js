import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Container } from 'react-bootstrap';

const Section = styled.section`
  width: 100%;
  padding: 60px 0px 35px;
  background-color: #f8f8f8;

  h2 {
    margin: 0!important;
    font-family: Inter;
    font-weight: 300;
    color: #000;
    font-size: 30px;
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

const ProgramName = styled.h3`
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

const ProgramContainer = styled.div`
  background-color: #fff;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
  height: 215px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 10px;
  user-select: none;
  pointer-events: none;
`

const SliderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 40px;

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

export default function ProgramsSection() {
  return (
    <>
      <Section id="programs-section">
        <Container>
          <HeaderContainer>
            <h2><strong>Nossos</strong> Programas</h2>
            <SeeMore href="#">Ver todos os programas</SeeMore>
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
              <ProgramContainer>
                <img src="/slider/programs-slider/01.png"/>
              </ProgramContainer>
              <ProgramName>PROGRAMA DE DESENVOLVIMENTO<br/>ESTRATÉGICO DE TOUROS</ProgramName>
            </SwiperSlide>
            <SwiperSlide>
              <ProgramContainer>
                <img src="/slider/programs-slider/02.png" />
              </ProgramContainer>
              <ProgramName>SELECT MATING SERVICE</ProgramName>
            </SwiperSlide>
            <SwiperSlide>
              <ProgramContainer>
                <img src="/slider/programs-slider/03.png" width="220px" height="auto" />
              </ProgramContainer>
              <ProgramName>N GEN</ProgramName>
            </SwiperSlide>
            <SwiperSlide>
              <ProgramContainer>
                <img src="/slider/programs-slider/01.png"/>
              </ProgramContainer>
              <ProgramName>PROGRAMA DE DESENVOLVIMENTO<br/>ESTRATÉGICO DE TOUROS</ProgramName>
            </SwiperSlide>
            <SwiperSlide>
              <ProgramContainer>
                <img src="/slider/programs-slider/02.png" />
              </ProgramContainer>
              <ProgramName>SELECT MATING SERVICE</ProgramName>
            </SwiperSlide>
            <SwiperSlide>
              <ProgramContainer>
                <img src="/slider/programs-slider/03.png" width="220px" height="auto" />
              </ProgramContainer>
              <ProgramName>N GEN</ProgramName>
            </SwiperSlide>
            <SwiperSlide>
              <ProgramContainer>
                <img src="/slider/programs-slider/01.png"/>
              </ProgramContainer>
              <ProgramName>PROGRAMA DE DESENVOLVIMENTO<br/>ESTRATÉGICO DE TOUROS</ProgramName>
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