import Head from 'next/head'
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import styled, { css } from 'styled-components'
import Menu from '../components/Menu';
import Search from '../components/Search';

const Section = styled.section`
  position: relative;
  width: 100%;
  max-width: 100vw;
`

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  padding: 60px;
`;

const Logo = styled.img`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3));
  user-select: none;
`

const SliderBanner = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;

  ${props => props.first && css`
    background-image: url('/slider/banner-slider/01.png');
  `}

  ${props => props.second && css`
    background-image: url('/slider/banner-slider/02.png');
  `}
`

const SlideContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
  ${props => props.first && css`
    .slide-title {
      color: #fff;
      font-family: Inter;
      font-weight: 400;
      font-size: 42px;
      margin-top: 60px;
      text-align: center;
      margin-bottom: 0;
    }

    .slide-subtitle {
      color: #fff;
      font-family: Inter;
      font-weight: 400;
      font-size: 18px;
      text-align: center;
      max-width: 700px;
      margin: 0 auto;
      margin-top: 15px;
    }

    .slide-cta {
      background: transparent;
      border: 2px solid white;
      padding: 20px 65px;
      border-radius: 50px;
      
      color: white;
      text-decoration: none;
      text-align: center;
      font-size: 16px;
      font-family: Inter;
      font-weight: bold;
      text-transform: uppercase;

      display: block;
      width: fit-content;
      margin: 0 auto;
      margin-top: 40px;
    }
  `}

  ${props => props.second && css`
    .slide-play {
      margin-top: 80px;
      user-select: none;
      pointer-events: none;
    }
    
    .slide-title {
      color: #fff;
      font-family: Inter;
      font-weight: 400;
      font-size: 30px;
      text-align: center;
      max-width: 500px;
      margin: 20px auto;
    }

    .slide-badge {
      background-color: #ed1c24;
      border-radius: 6px;
      padding: 9px 16px;
      user-select: none;

      color: #fff;
      font-family: Inter;
      font-weight: 400;
      text-transform: uppercase;
      font-size: 16px;
    }
  `}
`

export default function HeaderSection() {
  return (
    <>
      <Section id="header-section">
        <NavbarContainer>
          <Search />
          <Logo className="logo" src="/logo.png" alt="Logo" width="250px" height="auto"/>
          <Menu />
        </NavbarContainer>
        <Splide style={{background: 'black'}} options={{
          fixedHeight: '550px',
          arrows: false,
          autoplay: true,
          interval: 10000,
          drag: false,
          pauseOnFocus: false,
          speed: 800,
          rewind: true
        }}>
          <SplideSlide>
            <SliderBanner first/>
            <SlideContent first>
              <h1 className="slide-title">Select Sires do Brasil</h1>
              <p className="slide-subtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
              <a href="#" className="slide-cta">Nossas soluções</a>
            </SlideContent>
          </SplideSlide>
          <SplideSlide>
            <SliderBanner second/>
            <SlideContent second>
              <img src="/icons/playbutton.svg" className="slide-play" width="70px" height="70px"/>
              <h1 className="slide-title">Acompanhe o leilão de touros Aberdeen Angus</h1>
              <span className="slide-badge">Ao vivo</span>
            </SlideContent>
          </SplideSlide>
          <SplideSlide>
          <SliderBanner first/>
            <SlideContent first>
              <h1 className="slide-title">Select Sires do Brasil</h1>
              <p className="slide-subtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
              <a href="#" className="slide-cta">Nossas soluções</a>
            </SlideContent>
          </SplideSlide>
        </Splide>
      </Section>
    </>
  )
}