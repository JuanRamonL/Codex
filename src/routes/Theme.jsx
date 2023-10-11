import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function Theme() {
  return (
    <div className="container-fluid px-0">
			<div className="row g-0 ">
				<div className="col-2">
					<Sidebar/>
				</div>
				<div className="col-10">
					<div className="ennoia-content text-ennoia-gray">
						<div className='d-flex justify-content-end'>
							<i className="fa-solid fa-circle-user fs-2 text-ennoia"></i>
						</div>
            <div className='d-flex flex-column align-items-center gap-4'>
              <Link to='/theme-info' className="theme-box text-ennoia p-4">
                1
              </Link>
              <div className="theme-box align-self-end theme-box-disabled text-ennoia-gray p-4">
                2
              </div>
              <div className="theme-box theme-box-disabled text-ennoia-gray p-4">
                3
              </div>
            </div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Theme