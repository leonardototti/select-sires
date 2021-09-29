import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  padding: 40px 0px;
  background-color: #ed1c24;
  position: relative;

  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    background-image: url('/newsletter-background.svg');
    background-repeat: no-repeat;
    background-position: center left calc(50% - 195px);
    padding: 70px 0px;
  }

  @media(max-width: 992px) {
    .container {
      background-size: 50%;
      background-position: center left calc(50% - 170px);
    }
  }

  @media(max-width: 768px) {
    .container {
      background-size: 60%;
      background-position: center left calc(50% - 100px);
    }
  }

  @media(max-width: 576px) {
    padding: 40px 0px 20px;

    .container {
      background-size: 300px;
      background-position: center left calc(50% - 150px);
      padding: 20px 0px 50px;
    }
  }
`

export const NewsletterContent = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
`

export const NewsletterTitle = styled.h2`
  color: #fff;
  font-family: Inter;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 10px;
  text-align: center;

  @media(max-width: 576px) {
    font-size: 24px;
  }
`

export const NewsletterSubTitle = styled.h3`
  color: #fff;
  font-family: Inter;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.111;
  text-align: center;
  margin-top: 0;
  margin-bottom: 40px;

  @media(max-width: 576px) {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
    margin-bottom: 30px;
  }
`

export const NewsletterJoin = styled.a`
  background-color: #fff;
  border-radius: 5px;
  padding: 18px 90px;
  display: block;
  cursor: pointer;
  user-select: none;
  transition: transform 0.3s ease-in-out, background-color 0.2s, border-color 0.2s, color 0.3s;
  border: 2px solid transparent;

  color: #ed1c24;
  font-family: Inter;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;

  &:active {
    transform: scale(1.05);
  }

  &:hover {
    background-color: transparent;
    border-color: #fff;
    color: #fff;
  }

  @media(max-width: 576px) {
    padding: 20px 75px;
  }
`