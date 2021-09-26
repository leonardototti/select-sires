import styled from 'styled-components'

export const Section = styled.section`
  background-color: #000;
  padding: 50px 20px;
`

export const PostTitle = styled.h2`
  color: #fff;
  font-family: Inter;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 35px;
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