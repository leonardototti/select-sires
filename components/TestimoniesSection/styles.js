import styled, { css } from 'styled-components'

export const Section = styled.section`
  width: 100%;
  padding: 60px 0px 35px;
  background-color: #f8f8f8;

  h2 {
    margin: 0!important;
    font-family: Inter;
    font-weight: 300;
    color: #000;
    font-size: 30px;

    @media(max-width: 576px) {
      font-weight: bold;
      font-size: 24px;
    }
  }

  .swiper-pagination {
    left: 50px;
    bottom: -90px;
    text-align: left;

    @media(max-width: 576px) {
      left: 50%!important;
      bottom: 50px!important;
      transform: translateX(-50%);
      text-align: center;
    }
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  
  @media(max-width: 576px) {
    justify-content: center;
    margin-bottom: 25px;
  }
`

export const SeeMore = styled.a`
  color: #ed1c24;
  text-transform: uppercase;
  text-align: right;
  font-family: Inter;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
  text-decoration: none;
  margin-top: 4px;

  @media(max-width: 576px) {
    display: none;
  }

  ${props => props.responsive && css`
    display: none;
    text-align: center;
    margin-top: 20px;

    @media(max-width: 576px) {
      display: block;
    }
  `}
`

export const AuthorName = styled.h3`
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

  @media(max-width: 576px) {
    text-align: center;
    margin-top: 15px;
  }
`

export const TestimonyContainer = styled.div`
  margin-bottom: 20px;
  user-select: none;
  pointer-events: none;
  position: relative;

  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 84px;
    height: 84px;
    pointer-events: all;
    cursor: pointer;
    z-index: 1;
    pointer-events: none;
  }

  .play-button-hover {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 84px;
    height: 84px;
    pointer-events: all;
    cursor: pointer;
    opacity: 0;
    z-index: 9;
    transition: opacity .4s;

    &:hover {
      opacity: 1;
    }
  }
`

export const SliderButtonsContainer = styled.div`
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

    @media(max-width: 576px) {
      display: none;
    }
    
    img {
      cursor: pointer;
    }
  }
`