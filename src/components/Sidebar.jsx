import { Link } from 'react-router-dom'
import LogoEnnoia from '../assets/logo-ennoia.svg'

function Sidebar() {
  return (
    <div className="bg-ennoia-dark sticky-top ennoia-sidebar">
      <img src={LogoEnnoia} className='d-flex mx-auto' width={40} alt="" />
      <hr className='my-4' />
      <div className="side-bar d-flex flex-column">
        <ul className='p-0 m-0'>
          <li><a href="#" className='sidebar-link mb-3'>
            <span className='sidebar-link-icon'><i className="fa-solid fa-house"></i></span>
            <span className='sidebar-link-text'>Sidebar Link</span>
          </a></li>
          <li><a href="#" className='sidebar-link mb-3'>
            <span className='sidebar-link-icon'><i className="fa-solid fa-house"></i></span>
            <span className='sidebar-link-text'>Sidebar Link</span>
          </a></li>
          <li><a href="#" className='sidebar-link mb-3'>
            <span className='sidebar-link-icon'><i className="fa-solid fa-house"></i></span>
            <span className='sidebar-link-text'>Sidebar Link</span>
          </a></li>
          <li><a href="#" className='sidebar-link mb-3'>
            <span className='sidebar-link-icon'><i className="fa-solid fa-house"></i></span>
            <span className='sidebar-link-text'>Sidebar Link</span>
          </a></li>
        </ul>
        <Link to='/' className='btn-logout'>
          <span className='me-2'><i className="fa-solid fa-arrow-right-to-bracket"></i></span>
          <span>Cerrar Sesión</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar