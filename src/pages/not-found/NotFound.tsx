import { Link } from 'react-router-dom'
import Icon from '../../components/Icon'

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <Link to="/types" role="button">
        <h1>404 - Not Found</h1>
        <Icon type="icon" name="undo" title="Go back" />
      </Link>
    </div>
  )
}
