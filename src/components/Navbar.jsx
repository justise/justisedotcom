import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        {isHome ? (
          <ol className="navbar-nav flex-fill flex-row-reverse">
            <li className="nav-item">
              <Link to="/resume" className="nav-link active">Résumé</Link>
            </li>
          </ol>
        ) : (
          <ol className="navbar-nav flex-fill">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
          </ol>
        )}
      </div>
    </nav>
  )
}
