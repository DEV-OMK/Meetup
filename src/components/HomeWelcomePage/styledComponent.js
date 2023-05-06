import styled from 'styled-components'

export const WelcomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`

export const WelcomeTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;
  color: #334155;
`

export const WelcomeCaption = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: #64748b;
`

export const RegisterButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background-color: #3b82f6;
  padding: 8px;
  padding-inline: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 20px;
`

export const WelcomeImage = styled.img`
  width: 80%;
`
