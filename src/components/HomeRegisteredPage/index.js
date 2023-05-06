import {withRouter} from 'react-router-dom'
import MeetupContext from '../../context/MeetupContext'

import {
  WelcomePage,
  WelcomeTitle,
  WelcomeCaption,
  WelcomeImage,
} from './styledComponent'

const HomeRegisteredPage = () => (
  <MeetupContext.Consumer>
    {value => {
      const {name, topic, topicsList} = value
      const selectedTopic = topicsList.find(eachTopic => eachTopic.id === topic)

      return (
        <WelcomePage>
          <WelcomeTitle>{`Hello ${name}`}</WelcomeTitle>
          <WelcomeCaption>
            Welcome to {selectedTopic.displayText}
          </WelcomeCaption>
          <WelcomeImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </WelcomePage>
      )
    }}
  </MeetupContext.Consumer>
)

export default withRouter(HomeRegisteredPage)
