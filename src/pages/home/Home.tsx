import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="App">
      {/* logo */}
      <Link to="/types">
        <h1>Poke Stats</h1>
      </Link>
    </div>
  )
}
