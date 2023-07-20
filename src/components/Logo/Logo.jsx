import logo from '../../assets/images/logo2.png'
import '../Logo/Logo.css'

const Logo = () => {
  return (
    <div className='logo'>
      <img className='imagen' src={logo} alt="logo" />
    </div>
  )
}

export default Logo