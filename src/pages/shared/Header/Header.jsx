import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
  return (
    <div className='text-center mb-6 flex flex-col items-center justify-center gap-2'>
        <img src={logo} alt="Logo" className="mx-auto py-4" />
        <p>Journalism Without Fear or Favour</p>
        <p className='text-xl'>{moment().format("dddd, MMMM, YYYY") }</p>
    </div>
  );
}

export default Header;