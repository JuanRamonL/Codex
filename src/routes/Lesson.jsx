import Sidebar from "../components/Sidebar"
import LessonStart from "../components/LessonStart"

function Lesson() {
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
            <div className="lesson-start">
              <LessonStart/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lesson