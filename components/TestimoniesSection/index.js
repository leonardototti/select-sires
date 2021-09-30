import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Container } from "react-bootstrap";
import {
  Section,
  HeaderContainer,
  SeeMore,
  AuthorName,
  TestimonyContainer,
  SliderButtonsContainer,
} from "./styles";

export default function TestimoniesSection() {
  return (
    <Section id="testimonies-section">
      <Container>
        <HeaderContainer>
          <h2>
            <strong>Depoimentos</strong>
          </h2>
          <SeeMore href="#">Ver todos os depoimentos</SeeMore>
        </HeaderContainer>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".slider-button-next",
            prevEl: ".slider-button-last",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <TestimonyContainer>
              <img src="/slider/testimonies-slider/01.png" width="100%" />
              <img className="play-button" src="/icons/playbutton.svg" />
              <img
                className="play-button-hover"
                src="/icons/playbutton-hover.png"
              />
            </TestimonyContainer>
            <AuthorName>WILSON SILVA</AuthorName>
          </SwiperSlide>

          <SwiperSlide>
            <TestimonyContainer>
              <img src="/slider/testimonies-slider/02.png" width="100%" />
              <img className="play-button" src="/icons/playbutton.svg" />
              <img
                className="play-button-hover"
                src="/icons/playbutton-hover.png"
              />
            </TestimonyContainer>
            <AuthorName>ADEMIR CORREIA</AuthorName>
          </SwiperSlide>

          <SwiperSlide>
            <TestimonyContainer>
              <img src="/slider/testimonies-slider/01.png" width="100%" />
              <img className="play-button" src="/icons/playbutton.svg" />
              <img
                className="play-button-hover"
                src="/icons/playbutton-hover.png"
              />
            </TestimonyContainer>
            <AuthorName>WILSON SILVA</AuthorName>
          </SwiperSlide>

          <SwiperSlide>
            <TestimonyContainer>
              <img src="/slider/testimonies-slider/02.png" width="100%" />
              <img className="play-button" src="/icons/playbutton.svg" />
              <img
                className="play-button-hover"
                src="/icons/playbutton-hover.png"
              />
            </TestimonyContainer>
            <AuthorName>ADEMIR CORREIA</AuthorName>
          </SwiperSlide>

          <SwiperSlide>
            <TestimonyContainer>
              <img src="/slider/testimonies-slider/01.png" width="100%" />
              <img className="play-button" src="/icons/playbutton.svg" />
              <img
                className="play-button-hover"
                src="/icons/playbutton-hover.png"
              />
            </TestimonyContainer>
            <AuthorName>WILSON SILVA</AuthorName>
          </SwiperSlide>

          <SwiperSlide>
            <TestimonyContainer>
              <img src="/slider/testimonies-slider/02.png" width="100%" />
              <img className="play-button" src="/icons/playbutton.svg" />
              <img
                className="play-button-hover"
                src="/icons/playbutton-hover.png"
              />
            </TestimonyContainer>
            <AuthorName>ADEMIR CORREIA</AuthorName>
          </SwiperSlide>

          <SliderButtonsContainer>
            <div className="slider-button-last">
              <img
                src="/icons/slider-arrow-left.svg"
                width="29px"
                height="23px"
              />
            </div>
            <div className="slider-button-next">
              <img
                src="/icons/slider-arrow-right.svg"
                width="29px"
                height="23px"
              />
            </div>
          </SliderButtonsContainer>

          <SeeMore responsive href="#">
            Ver todos os touros
          </SeeMore>
        </Swiper>
      </Container>
    </Section>
  );
}
