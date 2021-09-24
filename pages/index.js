import Head from 'next/head'
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import styled from 'styled-components'
import Menu from '../components/Menu';
import Search from '../components/Search';

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

export default function Home() {
  return (
    <>
      <section id="header-section">
        <NavbarContainer>
          <Search />
          <img className="logo" src="/logo.png" alt="Logo" width="250px" height="auto"/>
          <Menu />
        </NavbarContainer>
        <Splide style={{background: 'black'}} options={{

          fixedHeight: '550px',
          arrows: false,
          // autoplay: true,
          interval: 10000,
          drag: false,
          pauseOnFocus: false,
          speed: 800,
          rewind: true
        }}>
          <SplideSlide>
            <img style={{ filter: 'brightness(0.8)', position: 'relative' }} height="100%" src="/slider/banner-slider/01.png" alt="Image 1"/>
            <div className="slide-content">
              <h1 className="slide-title">Select Sires do Brasil</h1>
              <p className="slide-subtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
              <a href="#" className="slide-cta">Nossas soluções</a>
            </div>
          </SplideSlide>
          <SplideSlide>
            <img style={{ filter: 'brightness(0.3)', position: 'relative' }} src="/slider/banner-slider/02.png" alt="Image 2"/>
            <div className="slide-content">
              <h1 className="slide-title">Acompanhe o leilão de touros Aberdeen Angus</h1>
              <p className="slide-subtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
              <a href="#" className="slide-cta">Nossas soluções</a>
            </div>
          </SplideSlide>
          <SplideSlide>
            <img style={{ filter: 'brightness(0.8)', position: 'relative' }} height="100%" src="/slider/banner-slider/01.png" alt="Image 1"/>
            <div className="slide-content">
              <h1 className="slide-title">Select Sires do Brasil</h1>
              <p className="slide-subtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
              <a href="#" className="slide-cta">Nossas soluções</a>
            </div>
          </SplideSlide>
        </Splide>
      </section>
    </>
  )
}