import styled from 'styled-components'

export const About = styled.section`
  width: 1268px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 768px;
  }

  @media screen and (max-width: 768px) {
    width: 320px;
    flex-direction: column;
  }
`

export const Article = styled.article`
  width: 700px;
  margin-left: 20px;

  h1 {
    color: var(--cyan);
    font-size: 0.875rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  h2 {
    font-size: 3rem;
    line-height: 3.75rem;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    width: 300px;
    text-align: center;
  }
`

export const Text = styled.p`
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 400;
`
