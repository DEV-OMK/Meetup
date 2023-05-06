import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`

export const RegisterNowButton = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  background-color: #3b82f6;
  padding: 12px;
  padding-inline: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 20px;
`

export const RegisterImage = styled.img`
  width: 48%;
`

export const Form = styled.form`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const FormTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 600;
  color: #334155;
  margin-top: 10px;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  color: #7b8794;
  margin-bottom: 15px;
`

export const NameInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  color: #7b8794;
  border: 1px solid #cbd5e1;
  outline: none;
  padding: 10px;
  width: 100%;
  margin-bottom: 25px;
  border-radius: 6px;
`

export const SelectInput = styled.select`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  color: #7b8794;
  border: 1px solid #cbd5e1;
  outline: none;
  padding: 10px;
  width: 100%;
  border-radius: 6px;
`

export const Error = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #ff0b37;
  margin-top: 5px;
`
