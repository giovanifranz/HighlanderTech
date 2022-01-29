import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: var(--white);
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  height: 72px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`
export const Container = styled.div`
  width: 1268px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1280px) {
    padding: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 375px;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 330px;

  .Icon {
    color: var(--purple);
    font-size: 22px;
  }

  .Icon:hover {
    opacity: 0.8;
  }
`

export const Text = styled.p`
  font-size: 0.625rem;
  text-align: right;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
