import styled from 'styled-components'

const SearchContainer = styled.div`
  background-color: #323232;
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
  display: grid;
  place-items: center;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3));
`

export default function Search() {
  return (
    <>
      <SearchContainer>
        <img src="/icons/search.svg" alt="Ícone de pesquisa" width="20px" height="20px" />
      </SearchContainer>
    </>
  )
}