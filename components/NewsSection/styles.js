import styled, { css } from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 60px 0px 40px;

  @media (max-width: 576px) {
    padding: 40px 0px;
  }

  h2 {
    margin: 0 !important;
    font-family: Inter;
    font-weight: 300;
    color: #000;
    font-size: 30px;

    @media (max-width: 576px) {
      font-size: 24px;
    }
  }

  img {
    user-select: none;
  }

  .swiper-pagination {
    left: 0px;
    bottom: 0px;
    text-align: center;

    .swiper-pagination-bullet {
      background: #cccccc;
      opacity: 1;
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 576px) {
    justify-content: center;
    margin-bottom: 30px;
  }
`;

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

  @media (max-width: 576px) {
    display: none;
  }

  ${(props) =>
    props.responsive &&
    css`
      display: none;
      text-align: center;
      margin-top: 20px;

      @media (max-width: 576px) {
        display: block;
      }
    `}
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &:hover {
    .news-link {
      opacity: 1;
      cursor: pointer;
      pointer-events: all;
    }
  }
`;

export const NewsTitle = styled.h3`
  color: #000;
  font-family: Inter;
  font-weight: bold;
  font-size: 19px;
  margin: 0;
  line-height: 1.389;
  margin-top: 25px;
  user-select: none;
  pointer-events: none;

  @media (max-width: 576px) {
    margin-top: 15px;
    font-size: 17px;
  }
`;

export const NewsLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 4px);
  background-color: rgba(0, 0, 0, 0.5);

  display: grid;
  place-items: center;

  font-family: Inter;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  opacity: 0;
`;

export const SliderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 30px;
  text-align: center;
`;
