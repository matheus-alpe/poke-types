import { Link } from 'react-router-dom'
import Icon from '@/components/Icon'

export default function Actions() {
  return (
    <div className="actions">
      <Link to="/types" role="button">
        <Icon type="icon" name="close" title="Close" />
      </Link>
    </div>
  )
}
