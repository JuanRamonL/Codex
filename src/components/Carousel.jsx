import Img_1 from '../assets/img-1.png'
import { Link } from 'react-router-dom'

function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-ennoia">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Img_1} className="d-block w-25 mx-auto mb-4" alt="..." />
          <div className="d-none d-md-block text-center mt-5">
            <h5 className='text-ennoia'>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
            <Link to='/theme'>Ir a la Lección</Link>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Img_1} className="d-block w-25 mx-auto" alt="..." />
          <div className="d-none d-md-block text-center mt-5">
            <h5 className='text-ennoia'>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Img_1} className="d-block w-25 mx-auto" alt="..." />
          <div className="d-none d-md-block text-center mt-5">
            <h5 className='text-ennoia'>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev mb-5" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next mb-5" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel