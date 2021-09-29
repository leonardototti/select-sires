import styled, { css } from 'styled-components'

export const Section = styled.section`
  width: 100%;
  padding: 60px 0px 35px;
  background-color: #f8f8f8;

  @media(max-width: 576px) {
    padding: 40px 0px;
  }

  h2 {
    margin: 0!important;
    font-family: Inter;
    font-weight: 300;
    color: #000;
    font-size: 30px;

    @media(max-width: 576px) {
      font-size: 24px;
      text-align: center;
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
    margin-bottom: 30px;
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

export const ProgramNameContainer = styled.div`
  &:hover h3 {
    background-color: black;
    color: #fff;
    padding: 20px;
  }
`

export const ProgramName = styled.h3`
  color: #000;
  font-family: Inter;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
  margin: 0;
  padding-top: 25px;
  padding-bottom: 15px;
  letter-spacing: 1px;
  user-select: none;
  pointer-events: none;
  transition: background-color .3s, color .5s, padding .4s;

  @media(max-width: 576px) {
    text-align: center;
    font-size: 14px;
  }
`

export const ProgramContainer = styled.div`
  background-color: #fff;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
  height: 215px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  user-select: none;
  pointer-events: none;
`

export const SliderButtonsContainer = styled.div`
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

    @media(max-width: 576px) {
      display: none;
    }

    img {
      cursor: pointer;
    }
  }
`