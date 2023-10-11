import Sidebar from "../components/Sidebar"
import { Link } from "react-router-dom"

function ThemeInfo() {
  return (
    <div className="container-fluid px-0">
      <div className="row g-0 ">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <div className="ennoia-content text-ennoia-gray">
            <div className='d-flex justify-content-end'>
              <i className="fa-solid fa-circle-user fs-2 text-ennoia"></i>
            </div>
            <h2 className="mb-5">Título de Lección</h2>
            <div className="row g-4">
              <div className="col-4">
                <div className="bg-ennoia p-4 text-dark">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nobis magnam delectus autem eveniet impedit.</p>
                  <Link to='/lesson' className="text-dark">
                    Ir a Lección →
                  </Link>
                </div>
              </div>
              <div className="col-4">
                <div className="bg-secondary p-4 text-white">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nobis magnam delectus autem eveniet impedit.</p>
                  Ir a Lección →
                </div>
              </div>
              <div className="col-4">
                <div className="bg-secondary p-4 text-white">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nobis magnam delectus autem eveniet impedit.</p>
                  Ir a Lección →
                </div>
              </div>
              <div className="col-4">
                <div className="bg-secondary p-4 text-white">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nobis magnam delectus autem eveniet impedit.</p>
                  Ir a Lección →
                </div>
              </div>
              <div className="col-4">
                <div className="bg-secondary p-4 text-white">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nobis magnam delectus autem eveniet impedit.</p>
                  Ir a Lección →
                </div>
              </div>
              <div className="col-4">
                <div className="bg-secondary p-4 text-white">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nobis magnam delectus autem eveniet impedit.</p>
                  Ir a Lección →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeInfo