import './Register.css'
import LogoEnnoia from '../assets/logo-ennoia.svg'
import IconGoogle from '../assets/google.svg'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="container pt-5 mt-4">
      <div className="row text-center d-flex flex-column align-items-center justify-content-center">
        <img src={LogoEnnoia} className='logo-ennoia' />
        <h3 className='fs-5 my-4'>Registrarse en Ennoia</h3>
        <form className='form-ennoia d-flex flex-column align-items-center justify-content-center'>
          <input type="text" className='form-control input-ennoia' placeholder='Nombre y Apellido' />
          <input type="email" className='form-control input-ennoia' placeholder='Correo Electrónico' />
          <input type="password" className='form-control input-ennoia' placeholder='Contraseña' />
          <Link to="/home" className='btn-ennoia form-control'>Registrarse</Link>
          <div className="hr-divider"></div>
          <button className='btn-google form-control d-flex justify-content-center align-items-center'>
            <img src={IconGoogle} className='me-2' width={36} alt="" />
            <span>Continuar con Google</span>
          </button>
        </form>
        <p className='my-5'>¿Ya tienes una cuenta? <Link to='/login' className='link-color'>Iniciar Sesión</Link></p>
      </div>
    </div>
  )
}

export default Register