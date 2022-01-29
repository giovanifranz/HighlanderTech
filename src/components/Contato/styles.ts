import styled from 'styled-components'

export const Container = styled.section`
  width: 1268px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 968px;
  }

  @media screen and (max-width: 768px) {
    width: 350px;
    flex-direction: column;
    align-items: center;
  }
`
