import styled, { css } from 'styled-components'

export const Section = styled.section`
  position: relative;
  width: 100%;
  max-width: 100vw;
`

export const NavbarContainer = styled.nav`
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

export const Logo = styled.img`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3));
  user-select: none;
`

export const SliderBanner = styled.div`
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

export const SlideContent = styled.div`
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