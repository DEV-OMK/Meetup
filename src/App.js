import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import MeetupContext from './context/MeetupContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: topicsList[0].displayText,
    isRegistered: false,
  }

  updateName = name => {
    this.setState({name})
  }

  updateTopic = topic => {
    this.setState({topic})
  }

  updateRegisteredStatus = () => {
    this.setState(prevState => ({isRegistered: !prevState.isRegistered}))
  }

  render() {
    const {name, topic, isRegistered} = this.state

    return (
      <MeetupContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          updateName: this.updateName,
          updateTopic: this.updateTopic,
          updateRegisteredStatus: this.updateRegisteredStatus,
          topicsList,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
