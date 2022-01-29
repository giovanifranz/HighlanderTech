import styled from 'styled-components'
import { Form, Field } from 'formik'

export const Formulario = styled(Form)`
  position: relative;
  width: 425px;
  height: 450px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin: 5px;
    width: 47%;

    input,
    select {
      height: 38px;
    }
  }

  #service {
    padding: 0 5px;
    border-radius: 5px;
    border: 0.5px solid var(--black);
    font-size: 0.875rem;
  }

  @media screen and (max-width: 768px) {
    width: 335px;
  }
`

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  margin-bottom: 5px;
`

export const TextareaSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5px;
  width: 100%;

  textarea {
    height: 200px;
    margin-bottom: 45px;
    border-radius: 5px;
    border: 0.5px solid var(--black);
    padding: 10px;
    font-size: 0.875rem;
  }
`

export const Button = styled.button`
  position: absolute;
  width: 135px;
  height: 40px;
  right: 0;
  bottom: 0;
  margin: 5px;

  background-color: var(--purple-light);
  border: none;
  border-radius: 5px;
  color: var(--white);
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-weight: 700;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-left: 5px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`
export const Input = styled(Field)`
  border-radius: 5px;
  border: 0.5px solid var(--black);
  padding: 10px;
  font-size: 0.875rem;
`
