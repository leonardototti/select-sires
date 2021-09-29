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

export const NewsletterTitle = styled.h3`
  font-family: Inter;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
`;

export const NewsletterSubTitle = styled.p`
  color: #000;
  font-family: Inter;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 25px;
  line-height: 1.429;
`;

export const Input = styled.input`
  outline: none;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #838383;
  padding: 13px 20px;

  color: #000;
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;

  &:focus {
    border-color: #000;
  }

  &:placeholder {
    color: #838383;
  }
`;

export const NewsletterJoin = styled.button`
  background-color: #ed1c24;
  border-radius: 5px;
  padding: 15px 90px;
  display: block;
  cursor: pointer;
  user-select: none;
  transition: transform 0.3s ease-in-out, background-color 0.2s,
    border-color 0.2s, color 0.3s;
  border: 2px solid transparent;
  margin-top: 20px;
  width: 100%;

  color: #fff;
  font-family: Inter;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;

  &:active {
    transform: scale(1.05);
  }

  &:hover {
    background-color: transparent;
    border-color: #ed1c24;
    color: #ed1c24;
  }
`;
