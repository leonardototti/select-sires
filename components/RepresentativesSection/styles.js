import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px 15px;
  background-color: #000;

  .toggle-map-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const SectionTitle = styled.h2`
  color: #fff;
  font-family: Inter;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`

export const SelectStateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SelectState = styled.button`
  outline: none;
  color: #949393;
  border: 0;
  background: transparent;
  font-family: Inter;
  font-weight: 300;
  font-size: 18px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 45px;
  position: relative;
  padding: 0 15px;
  cursor: pointer;
  user-select: none;

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) ;
    right: 0;
  }
`

export const ToggleMap = styled.a`
  color: #fff;
  font-family: Inter;
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 10px;
  padding: 25px 30px;
  cursor: pointer;
  user-select: none;
`