import styled from 'styled-components'

export const Section = styled.section`
  background-color: #f8f8f8;
  padding: 50px 20px 60px;

  h2 {
    color: #000;
    font-family: Inter;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    margin: 0;
    margin-bottom: 25px;
  }

  
  @media(max-width: 768px) {
    .col-md-6:first-child {
      margin-bottom: 20px;
    }

    .col-md-6 {
      padding: 0!important;
    }
  }
`

export const Select = styled.button`
  border: 0;
  background-color: #fff;
  border-radius: 30px;
  padding: 15px 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;

  span {
    color: #000;
    font-family: Inter;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    margin-left: 10px;
  }

  .arrow-down {
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
  }

  @media(max-width: 768px) {
    background-color: #eeeeee;
  }
`