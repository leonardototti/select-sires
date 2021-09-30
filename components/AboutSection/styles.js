import styled from "styled-components";

export const Section = styled.section`
  background-image: url("/about-pattern.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 100px 20px 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    padding: 60px 20px 70px;
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const AboutTitle = styled.h2`
  color: #ed1c24;
  font-family: Inter;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: 576px) {
    margin-bottom: 25px;
  }
`;

export const AboutSubtitle = styled.h3`
  color: #000;
  font-family: Inter;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.667;
  text-align: center;
  max-width: 950px;
  margin: 0 auto 50px;

  @media (max-width: 576px) {
    font-size: 17px;
    margin: 0 auto 25px;
  }
`;

export const AboutDescription = styled.p`
  color: #686868;
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.667;
  text-align: center;
  max-width: 780px;
  margin: 0 auto 50px;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const AboutButton = styled.a`
  background-color: #ed1c24;
  border-radius: 5px;
  padding: 18px 90px;
  display: block;
  cursor: pointer;
  user-select: none;
  transition: transform 0.3s ease-in-out, background-color 0.2s,
    border-color 0.2s, color 0.3s;
  border: 2px solid transparent;

  color: #fff;
  font-family: Inter;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  @media (max-width: 400px) {
    padding: 18px 20px;
    width: 90%;
  }

  &:active {
    transform: scale(1.05);
  }

  &:hover {
    background-color: transparent;
    border-color: #ed1c24;
    color: #ed1c24;
  }
`;
