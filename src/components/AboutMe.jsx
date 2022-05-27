import { BiRightArrow } from 'react-icons/bi'
import me from '../assets/me.png'

const AboutMe = () => {
  return (
    <div className='about'>
      <div className='about-text'>
        <h2 id='about'>About Me</h2>
        <p>
          Hey! I'm Hunter, I love creating things through code. I've been at it
          for about 4 years. I started as a self-taught developer then attended
          Momentum Learning, a local coding school in Durham. During my time
          there I further deepened my knowledge of front-end development and
          also got experience working on projects with other people.
        </p>
        <p>These are some technoligies I frequently work with right now:</p>
        <ul>
          <li>
            <BiRightArrow className='arrow' /> Javascript(ES6+)
          </li>
          <li>
            <BiRightArrow className='arrow' /> React
          </li>
        </ul>
        <p>Some technoligies I'm currently learning:</p>
        <ul>
          <li>
            <BiRightArrow className='arrow' /> Node.js
          </li>
          <li>
            <BiRightArrow className='arrow' /> Express.js
          </li>
        </ul>
      </div>
      <div className='about-img'>
        <img src={me} alt='me' />
      </div>
    </div>
  )
}

export default AboutMe
