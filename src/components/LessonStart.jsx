import { Link } from 'react-router-dom'
import EnnoiaPet from '../assets/ennoia-pet.svg'

function LessonStart() {
  return (
    <div className='container-fluid px-0 lesson-content'>
      <div className='d-flex align-items-center gap-5'>
        <div className='ennoia-pet'>
          <img src={EnnoiaPet} width={300} alt="" />
        </div>
        <div className='lesson-info'>
          <div className='bg-ennoia w-50 text-dark p-4 rounded-4'>
            <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tenetur consequuntur, inventore laudantium hic quasi culpa reprehenderit ad exercitationem nulla laboriosam? Repudiandae qui in explicabo aperiam accusamus nihil nam iure repellat. Eaque sequi eos mollitia, aperiam, illum quidem fugiat ipsum totam iste officiis corrupti dolores quo. Adipisci illo vel in sed rem blanditiis eum est. Cupiditate, vero maiores ipsum consequatur quas possimus architecto dolores quidem nesciunt, nobis atque aliquid numquam provident. Veniam praesentium molestiae, aliquid nemo nisi doloremque odio eos obcaecati accusamus architecto. Ratione, quibusdam distinctio quas, repellendus corrupti cum totam voluptatem sed et non qui accusantium fugit dolor voluptas?</p>
          </div>
          <Link className='btn-ennoia-line px-5 mt-4 d-inline-block' to='/lesson-game'>Comenzar</Link>
        </div>
      </div>
    </div>
  )
}

export default LessonStart