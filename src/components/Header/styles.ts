import styled from 'styled-components'

export const Header = styled.header`
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  background-color: var(--white);
  position: fixed;
  z-index: 999999;

  @media screen and (max-width: 768px) {
    height: 144px;
    position: relative;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 300px;

  a {
    text-decoration: none;
    color: var(--black);
    font-size: 1.15rem;
    font-weight: 500;
    transition: all ease 0.3s;
  }

  a:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`

export const Container = styled.div`
  width: 1268px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 1280px) {
    padding: 30px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 375px;
  }
`
