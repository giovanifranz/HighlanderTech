import styled from 'styled-components'

export const Container = styled.section`
  width: 980px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 375px;
  }
`
export const Article = styled.article`
  width: 560px;
  padding: 40px;
  text-align: right;
  position: relative;
  line-height: 2rem;
  margin-top: -60px;

  h1 {
    font-size: 0.875rem;
    font-weight: bold;
    color: var(--cyan);
    text-transform: uppercase;
  }

  h2 {
    margin-top: 8px;
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--black);
    line-height: 2.8rem;
  }

  @media screen and (max-width: 768px) {
    width: 375px;
    padding: 20px;
    text-align: center;

    margin-bottom: 60px;
  }
`

export const Text = styled.p`
  margin-top: 30px;
  font-size: 1.125rem;
`

export const Anchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--purple);
  font-size: 1.125rem;
  font-weight: 700;
  position: absolute;
  right: 0;
  padding-right: 40px;
  margin-top: 30px;
  transition: all ease 0.3s;

  p {
    margin-right: 8px;
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
    left: auto;
    right: 50%;
    margin-right: -150px;
    padding-left: 0;
    padding-right: 0;
  }
`
