import LogoEnnoia from '../assets/logo-ennoia.svg'
import Img_1 from '../assets/img-1.png'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<div className="container-fluid px-0">
			<div className="row g-0 ">
				<div className="col-2">
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
				</div>
				<div className="col-10">
					<div className="ennoia-content text-ennoia-gray">
						<div className='d-flex justify-content-end'>
							<i className="fa-solid fa-circle-user fs-2 text-ennoia"></i>
						</div>
						<div id="carouselExampleCaptions" className="carousel slide carousel-ennoia">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img src={Img_1} className="d-block w-25 mx-auto mb-4" alt="..." />
									<div className="d-none d-md-block text-center mt-5">
										<h5 className='text-ennoia'>First slide label</h5>
										<p>Some representative placeholder content for the first slide.</p>
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
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home