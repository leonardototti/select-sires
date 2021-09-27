import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  padding: 60px 0px 120px;

  h2 {
    margin: 0!important;
    font-family: Inter;
    font-weight: 300;
    color: #000;
    font-size: 30px;
  }

  img {
    user-select: none;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`

export const SeeMore = styled.a`
  color: #ed1c24;
  text-transform: uppercase;
  text-align: right;
  font-family: Inter;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
  text-decoration: none;
`

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
`