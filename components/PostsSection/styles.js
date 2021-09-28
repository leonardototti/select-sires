import styled from 'styled-components'

export const Section = styled.section`
  background-color: #000;
  padding: 50px 20px;

  img {
    user-select: none;
    pointer-events: none;
  }

  .swiper-slide {
    position: relative;

    &:hover {
      .post-link {
        opacity: 1;
        cursor: pointer;
        pointer-events: all;
      }
    }
  }
`

export const PostTitle = styled.h2`
  color: #fff;
  font-family: Inter;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 35px;
`

export const PostLink = styled.a`
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

  transition: opacity .5s;
`

export const SliderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 60px;

  div {
    margin: 0 5px;
    padding: 10px;
    display: grid;
    place-items: center;
    user-select: none;
    cursor: pointer;

    img {
      cursor: pointer;
      filter: invert(1);
    }
  }
`