import './home.scss'
import Typical from 'react-typical'

const Home = () => {
  return(
    <div className='home_ctn'>
      <section className='banner'>
        <div className='info'>
          <p className='greeting'>Hello I'm</p>
          <h1 className='name'>ADRIAN MARIMON</h1>
          <Typical
            className='typical'
            steps={['FULL STACK DEVELOPER.', 2500, '', 1500]}
            loop={Infinity}
            wrapper="h4"
          />
          <p className='summary'>
          Young enthusiast who loves finding new solutions for all sort of problems. 
          Introduced to programming in 2016. Participated on the annual FRC events. Assisted to 
          Wyncode Academy where I learned  HTML, CSS, JavaScript, Ruby, Rails, SQL, GitHub and others tools that 
          helped me to become a certified Full-Stack Developer. Currently working at BrainStation, this company 
          give me the opportunity to increase my knowledge and professional experience working with an amazing team 
          and helping new new enthusiast to become the best developers they can be.
          </p>
          <button>Download Resume</button>
        </div>

        <div className='img'>

        </div>
      </section>
    </div>
  )
}

export default Home;