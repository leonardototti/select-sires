import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import Menu from '../../components/Menu'
import Search from '../../components/Search'
import { Section, NavbarContainer, Logo, SliderBanner, SlideContent } from './styles'

export default function HeaderSection() {
  return (
    <>
      <Section id="header-section">
        <NavbarContainer>
          <Search />
          <Logo className="logo" src="/logo.png" alt="Logo" width="250px" height="auto"/>
          <Menu />
        </NavbarContainer>
        <Swiper 
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{ clickable: true }}
          simulateTouch={false}
          speed={800}
        >
        {/* <Splide style={{background: 'black'}} options={{
          fixedHeight: '550px',
          arrows: false,
          autoplay: true,
          interval: 10000,
          drag: false,
          pauseOnFocus: false,
          speed: 800,
          rewind: true
        }}> */}
          <SwiperSlide>
            <SliderBanner first/>
            <SlideContent first>
              <h1 className="slide-title">Select Sires do Brasil</h1>
              <p className="slide-subtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
              <a href="#" className="slide-cta">Nossas soluções</a>
            </SlideContent>
          </SwiperSlide>
          <SwiperSlide>
            <SliderBanner second/>
            <SlideContent second>
              <img src="/icons/playbutton.svg" className="slide-play" width="70px" height="70px"/>
              <h1 className="slide-title">Acompanhe o leilão de touros Aberdeen Angus</h1>
              <span className="slide-badge">Ao vivo</span>
            </SlideContent>
          </SwiperSlide>
          <SwiperSlide>
          <SliderBanner first/>
            <SlideContent first>
              <h1 className="slide-title">Select Sires do Brasil</h1>
              <p className="slide-subtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
              <a href="#" className="slide-cta">Nossas soluções</a>
            </SlideContent>
          </SwiperSlide>
        </Swiper>
      </Section>
    </>
  )
}