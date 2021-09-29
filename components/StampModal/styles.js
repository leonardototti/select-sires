import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .close-icon-container {
    position: absolute;
    top: 3px;
    right: 0px;
    padding: 25px;
    cursor: pointer;
  }
`;
export const PolygonPlaceholder = styled.div`
  width: 113px;
  height: 105px;
  background-image: url("/slider/stamps-slider/polygon-modal.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  transition: background-image 0.2s;
  display: grid;
  place-items: center;
`;

export const StampName = styled.h4`
  color: #000;
  font-family: Inter;
  font-weight: bold;
  font-size: 22px;
  line-height: 1.2;
  text-transform: uppercase;
  margin: 0;
  margin-top: 20px;
  user-select: none;
  pointer-events: none;
  text-align: center;
`;

export const StampDescription = styled.p`
  color: #686868;
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.667;
  margin: 0;
  margin-top: 25px;
  user-select: none;
  pointer-events: none;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
