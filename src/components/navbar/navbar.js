import './navbar.scss'
const Navbar = () => {


  return(
    <section className='ctn nav'>
      <div className='logo'>
        <h3>AM</h3>
      </div>

      <div className='nav_links-ctn'>
        <div className='links'>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Projects</a>
        </div>
        
        <div className='toggle_btn'>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
    </section>
  )
}


export default Navbar;

