import {withRouter, Link} from 'react-router-dom'

import {
  WelcomePage,
  WelcomeTitle,
  WelcomeCaption,
  RegisterButton,
  WelcomeImage,
} from './styledComponent'

const HomeWelcomePage = () => (
  <WelcomePage>
    <WelcomeTitle>Welcome to Meetup</WelcomeTitle>
    <WelcomeCaption>Please register for the topic</WelcomeCaption>
    <Link to="/register">
      <RegisterButton type="button">Register</RegisterButton>
    </Link>
    <WelcomeImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
      alt="meetup"
    />
  </WelcomePage>
)

export default withRouter(HomeWelcomePage)
