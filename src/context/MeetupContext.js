import React from 'react'

const MeetupContext = React.createContext({
  name: '',
  topic: '',
  isRegistered: false,
  updateName: () => {},
  updateTopic: () => {},
  updateRegisteredStatus: () => {},
  topicsList: [],
})

export default MeetupContext
