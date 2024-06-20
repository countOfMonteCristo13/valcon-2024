import { backgroundSecondary, flexCenter, fullScreen, textColor } from '../../styles/index.css'
import { notFoundPageHeadingStyle } from './NotFoundPageStyle.css'

const NotFoundPage = () => {
  return (
    <div className={`${backgroundSecondary} ${flexCenter} ${fullScreen}`}>
      <h1 className={`${notFoundPageHeadingStyle} ${textColor}`}>Page not found</h1>
    </div>
  )
}

export default NotFoundPage
