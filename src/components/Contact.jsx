import { MdOutlineEmail } from 'react-icons/md'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

const Contact = () => {
  return (
    <div className='contact'>
      <h2 id='contact'>Want to get in touch?</h2>
      <p>
        I am currently looking for opportunities. Whether you have any questions
        or would just like to say hi, I would love to hear from you! My inbox is
        always open.
      </p>

      <a href='mailto:hunterwoody@gmail.com'>
        <MdOutlineEmail className='contact-icons' />
      </a>
      <a
        href='https://www.linkedin.com/in/hunter-woody'
        rel='noopener noreferrer'
        target='_blank'
      >
        <FaLinkedinIn className='contact-icons' />
      </a>
      <a
        href='https://www.github.com/hsw919'
        rel='noopener noreferrer'
        target='_blank'
      >
        <FiGithub className='contact-icons' />
      </a>
    </div>
  )
}

export default Contact
