import styled, { css } from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  max-width: 100vw;

  .swiper {
    height: 550px;

    @media (max-width: 576px) {
      height: 600px;
    }
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 1;
  }

  .swiper-pagination {
    bottom: 40px !important;

    @media (max-width: 576px) {
      bottom: 30px !important;
    }
  }
`;

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

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3));
  user-select: none;

  @media (max-width: 576px) {
    top: 15px;
    width: 200px;
    height: 111px;
  }
`;

export const SliderBanner = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;

  ${(props) =>
    props.first &&
    css`
      background-image: url("/slider/banner-slider/01.png");

      @media (max-width: 576px) {
        background-image: url("/slider/banner-slider/mobile/01.png");
      }
    `}

  ${(props) =>
    props.second &&
    css`
      background-image: url("/slider/banner-slider/02.png");

      @media (max-width: 576px) {
        background-image: url("/slider/banner-slider/mobile/02.png");
      }
    `}
`;

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

  ${(props) =>
    props.first &&
    css`
      .slide-title {
        color: #fff;
        font-family: Inter;
        font-weight: 400;
        font-size: 42px;
        margin-top: 60px;
        text-align: center;
        margin-bottom: 0;

        @media (max-width: 576px) {
          font-size: 30px;
          margin-top: 70px;
        }
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

        @media (max-width: 576px) {
          padding: 0px 15px;
        }
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

        transition: background-color 0.3s, border 0.3s;

        &:hover {
          background-color: #ed1c24;
          border-color: #ed1c24;
        }

        @media (max-width: 576px) {
          padding: 18px 40px;
          margin-top: 35px;
        }
      }
    `}

  ${(props) =>
    props.second &&
    css`
      .slide-play {
        margin-top: 80px;
        user-select: none;
        pointer-events: none;

        @media (max-width: 576px) {
          width: 60px;
          height: 60px;
        }
      }

      .slide-title {
        color: #fff;
        font-family: Inter;
        font-weight: 400;
        font-size: 30px;
        text-align: center;
        max-width: 500px;
        margin: 20px auto;

        @media (max-width: 576px) {
          font-size: 24px;
          margin: 20px auto 25px;
        }
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

        @media (max-width: 576px) {
          padding: 7px 12px;
          font-weight: bold;
          font-size: 14px;
        }
      }
    `}
`;
