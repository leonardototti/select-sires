import styled from 'styled-components'

export const Section = styled.footer`
  background-color: #000;
  padding: 80px 20px 40px;
  text-align: center;
  position: relative;

  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  hr {
    border-color: #1a1a1a;
    margin-bottom: 15px;
  }
`

export const FooterTitle = styled.h2`
  color: #fff;
  font-family: Inter;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 10px;
`

export const FooterAddress = styled.h3`
  color: #949393;
  font-family: Inter;
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 25px;
`

export const FooterAddressButton = styled.a`
  background-color: #333;
  border-radius: 5px;
  padding: 4px 13px;
  margin-bottom: 60px;
  display: block;
  cursor: pointer;
  user-select: none;

  color: #fff;
  font-size: 14px;
  font-family: Inter;
  font-weight: 300;
  line-height: 1.429;
  text-transform: uppercase;
  text-decoration: none;

  border: 2px solid transparent;
  transition: border .5s;

  &:hover {
    border-color: #98989866;
  }

  img {
    margin-left: 10px;
  }
`

export const FooterPhoneTitle = styled.p`
  color: #fff;
  font-size: 14px;
  font-family: Inter;
  font-weight: 300;
  line-height: 1.429;
  text-transform: uppercase;
  margin-bottom: 0;
`

export const FooterPhone = styled.a`
  color: #ed1c24;
  font-size: 24px;
  font-family: Inter;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 60px;

  display: block;
  cursor: pointer;
  text-decoration: none;
`

export const FooterPageLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 25px;
  margin-bottom: 55px;
  padding-left: 0!important;
  row-gap: 10px;
`

export const FooterPageLink = styled.li`
  
  a {
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    color: #505050;
    text-decoration: none;
    transition: color 0.5s;
    padding: 5px 15px;

    &:hover {
      color: #fff;
    }
  }
`

export const FooterSocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`

export const FooterSocialLink = styled.a`
  padding: 10px;
  margin: 5px;
  user-select: none;
`

export const FooterCopyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  a {
    padding: 10px 20px;

    &:hover img {
      filter: brightness(2) drop-shadow(0px 0px 3px rgba(255,255,255, 0.6));
    }
  }

  img {
    transition: filter .5s;
  }
`

export const LanguageSelector = styled.button`
  background: transparent;
  border: 2px solid rgba(255,255,255,0.102);
  border-radius: 5px;
  padding: 15px 17px;
  position: absolute;
  bottom: 50px;
  left: 50px;

  color: #fff;
  font-family: Inter;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 170px;
`

export const BackToTop = styled.a`
  position: absolute;
  bottom: 50px;
  right: 50px;

  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;

  border-radius: 50%;
  background-color: #333333;
  display: grid;
  place-items: center;

  transition: transform 0.3s;

  &:hover {
    transform: scale(0.95);
  }

  img {
    filter: invert(1);
  }
`