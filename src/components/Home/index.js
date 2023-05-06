import Header from '../Header'
import HomeRegisteredPage from '../HomeRegisteredPage'
import HomeWelcomePage from '../HomeWelcomePage'

import MeetupContext from '../../context/MeetupContext'
import {HomeMainContainer, HomeResponsiveContainer} from './styledComponent'

const Home = () => (
  <MeetupContext.Consumer>
    {value => {
      const {isRegistered} = value

      return (
        <HomeMainContainer>
          <Header />
          <HomeResponsiveContainer>
            {isRegistered && <HomeRegisteredPage />}
            {!isRegistered && <HomeWelcomePage />}
          </HomeResponsiveContainer>
        </HomeMainContainer>
      )
    }}
  </MeetupContext.Consumer>
)

export default Home
