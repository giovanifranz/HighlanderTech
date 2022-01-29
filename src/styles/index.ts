import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
    --white: #fff;
    --purple: #753BBD;
    --purple-light: #B79CDE;
    --gray:#F9FEFF;
    --cyan:#2ec5ce;
    --cyan-light:#F3FEFF;
    --black: #18191F;

}
* {
    margin:0;
    padding:0;
    box-sizing:border-box;

}
html {
    @media (min-width: 1080px) {
        font-size: 93.75%;
    }
    @media (min-width: 768px) {
        font-size: 87.5%;
    }
}
body {
  -webkit-font-smoothing: antialiased;
  background-color: var(--cyan-light);
  color: var(--black);
  margin: 0;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}
`
export const Container = styled.main`
  height: 100%;
  width: 100%;
  margin-top: 72px;
  padding-bottom: 72px;
`
