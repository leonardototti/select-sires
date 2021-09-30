import styled, { css } from "styled-components";

export const Section = styled.section`
  background-color: #000;
  padding: 50px 20px 30px;

  @media (max-width: 576px) {
    padding: 45px 0px 35px;

    .container {
      padding: 0 !important;
    }
  }

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

  .swiper-pagination {
    left: 0px;
    bottom: 0px;
    text-align: center;

    .swiper-pagination-bullet {
      background: #333;
      opacity: 1;
    }
  }
`;

export const CatalogTitle = styled.h2`
  color: #fff;
  font-family: Inter;
  font-weight: bold;
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 35px;

  @media (max-width: 576px) {
    font-size: 24px;
    text-align: center;
  }
`;

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

  transition: opacity 0.5s;
`;

export const SliderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
