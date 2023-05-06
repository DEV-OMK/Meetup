import {withRouter} from 'react-router-dom'

import {
  NotFoundPage,
  NotFoundTitle,
  NotFoundCaption,
  NotFoundImage,
} from './styledComponent'

const NotFound = () => (
  <NotFoundPage>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundTitle>Page Not Found</NotFoundTitle>
    <NotFoundCaption>
      We are sorry, the page you requested could not be found
    </NotFoundCaption>
  </NotFoundPage>
)

export default withRouter(NotFound)
