import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  return (
    <div className='projects'>
      <h2 id='projects'>Some Stuff I've Built</h2>
      <ul>
        <li>
          <div className='project-img-container'>
            <a
              href='https://www.youtube.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <div className='project-img' />
            </a>
          </div>
          <div className='project-text text-right'>
            <h3 className='project-title'>Youtube Clone</h3>
            <p className='project-desc'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
              accusantium sed consequatur dolorum, facilis nulla commodi nobis
            </p>
            <p className='project-tags'>react, redux, html, css</p>
            <a
              href='https://www.github.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <AiFillGithub size='25px' className='project-icons' />
            </a>
            <a
              href='https://www.youtube.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FiExternalLink size='25px' className='project-icons' />
            </a>
          </div>
        </li>

        <li>
          <div className='project-text text-left'>
            <h3>Youtube clone</h3>
            <p className='project-desc'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
              accusantium sed consequatur dolorum, facilis nulla commodi nobis
            </p>
            <p className='project-tags'>react, redux, html, css</p>
            <a
              href='https://www.github.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <AiFillGithub size='25px' className='project-icons' />
            </a>
            <a
              href='https://www.youtube.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FiExternalLink size='25px' className='project-icons' />
            </a>
          </div>
          <div className='project-img-container'>
            <a
              href='https://www.youtube.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <div className='project-img' />
            </a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Projects
