import styled from 'styled-components'

export const Card = styled.div`
  width: 205px;
  height: 270px;
  border-radius: 10px;
  text-align: center;
  border: 4px solid ${(props) => props.theme.bgBorder};
  background-color: ${(props) => props.theme.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 10px;
  margin-top: 10px;
  transition: all ease 0.3s;

  .Icon {
    margin-bottom: 20px;
    position: absolute;
    top: 20px;
  }
`

export const Title = styled.h4`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: bold;
  position: absolute;
  top: 75px;
`

export const Text = styled.p`
  width: 180px;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.5rem;
  position: absolute;
  top: 115px;
`
