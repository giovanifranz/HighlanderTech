import styled from 'styled-components';

export const Container = styled.section`
  width: 1268px;
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;

  h3 {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 3.75rem;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 20px;

    h3 {
      display: none;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1268px;
  height: 200px;
`;
