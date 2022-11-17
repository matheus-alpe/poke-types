import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/types')
    }, 2000)
  }, [])

  return (
    <div className="App">
      {/* logo */}
      <Link to="/types">
        <h1>
          <img src="/android-chrome-512x512.png" alt="" />
        </h1>
      </Link>
    </div>
  )
}
