import {Component} from 'react'
import Header from '../Header'

import MeetupContext from '../../context/MeetupContext'

import {
  MainContainer,
  ResponsiveContainer,
  RegisterImage,
  RegisterNowButton,
  Form,
  FormTitle,
  InputLabel,
  NameInput,
  SelectInput,
  Error,
} from './styledComponent'

class Register extends Component {
  state = {
    showError: false,
  }

  renderForm = () => (
    <MeetupContext.Consumer>
      {value => {
        const {
          name,
          topic,
          updateName,
          updateTopic,
          updateRegisteredStatus,
          topicsList,
        } = value

        const {showError} = this.state

        const onChangeName = event => {
          updateName(event.target.value)
        }

        const onChangeTopic = event => {
          updateTopic(event.target.value)
        }

        const onSubmitForm = event => {
          event.preventDefault()
          if (name === '') {
            this.setState({showError: true})
          } else {
            const {history} = this.props
            updateRegisteredStatus()
            history.replace('/')
          }
        }

        return (
          <Form onSubmit={onSubmitForm}>
            <FormTitle>Let us join</FormTitle>
            <InputLabel htmlFor="name">NAME</InputLabel>
            <NameInput
              type="text"
              id="name"
              value={name}
              onChange={onChangeName}
              placeholder="Your name"
            />
            <InputLabel htmlFor="topic">TOPICS</InputLabel>
            <SelectInput id="topic" value={topic} onChange={onChangeTopic}>
              {topicsList.map(eachTopic => (
                <option key={eachTopic.id} value={eachTopic.id}>
                  {eachTopic.displayText}
                </option>
              ))}
            </SelectInput>
            <RegisterNowButton type="submit">Register Now</RegisterNowButton>
            {showError && <Error>Please enter your name</Error>}
          </Form>
        )
      }}
    </MeetupContext.Consumer>
  )

  render() {
    return (
      <MainContainer>
        <Header />
        <ResponsiveContainer>
          <RegisterImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          {this.renderForm()}
        </ResponsiveContainer>
      </MainContainer>
    )
  }
}

export default Register
