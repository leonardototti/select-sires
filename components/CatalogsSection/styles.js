import styled, { css } from 'styled-components'

export const Section = styled.section`
  background-color: #000;
  padding: 50px 20px 80px;
  
  img {
    user-select: none;
    pointer-events: none;
  }

  .swiper-slide {
    position: relative;

    &:hover {
      .catalog-download {
        opacity: 1;
        cursor: pointer;
        pointer-events: all;
      }
    }
  }
`

export const CatalogTitle = styled.h2`
  color: #fff;
  font-family: Inter;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 35px;
`

export const SlideContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:hover {
    .catalog-download {
      left: 0px;
      opacity: 1;
      cursor: pointer;
    }
  }
`

export const CatalogDownload = styled.a`
  color: #fff;
  font-family: Inter;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  position: absolute;
  bottom: 4px;
  left: 0px;
  pointer-events: none;
  user-select: none;
  cursor: pointer;

  display: grid;
  place-items: center;
  width: 100%;
  opacity: 0;

  background-color: #ed1c24;
  padding: 50px 15px 47px;

  transition: opacity .5s;
`