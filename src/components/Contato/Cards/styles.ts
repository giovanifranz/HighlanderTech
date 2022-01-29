import styled from 'styled-components'

export const Container = styled.section`
  margin: 210px 0 70px 70px;

  @media screen and (max-width: 1024px) {
    margin: 0;
  }
`

export const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;

  @media screen and (max-width: 1024px) {
    margin-left: 55px;
    font-size: 2.5rem;
  }

  @media screen and (max-width: 768px) {
    margin-left: auto;
    text-align: center;
    font-size: 1.5rem;
    margin-top: 30px;
  }
`

export const Content = styled.article`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
