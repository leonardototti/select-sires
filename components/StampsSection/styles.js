import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 60px 0px 40px;

  img {
    user-select: none;
    pointer-events: none;
  }
`;

export const SectionTitle = styled.h2`
  font-family: Inter;
  font-weight: 300;
  color: #000;
  font-size: 30px;
  margin-top: 0 !important;
  margin-bottom: 50px !important;

  @media (max-width: 576px) {
    text-align: center;
  }
`;

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    filter: drop-shadow(0px 0px 0px rgba(25, 10, 7, 0.15));
  }
`;

export const PolygonPlaceholder = styled.div`
  width: 94px;
  height: 88px;
  background-image: url("/slider/stamps-slider/polygon.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  transition: background-image 0.4s;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover {
    background-image: url("/slider/stamps-slider/polygon-hover.png");
  }
`;

export const StampName = styled.h3`
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
  text-align: center;

  @media (max-width: 576px) {
    font-size: 14px;
    margin-top: 15px;
  }
`;

export const SliderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    user-select: none;

    @media (max-width: 576px) {
      margin-top: 25px;
    }
  }
`;
