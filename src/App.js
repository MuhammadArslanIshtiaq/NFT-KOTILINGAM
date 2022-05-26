import FooterPrimary from './components/footer/FooterPrimary';
import NavbarPrimary from './components/navbar/NavbarPrimary';
import Paths from './Paths';

function App() {
  return (
    <div className='bg-ebony text-white overflow-x-hidden'>
      <NavbarPrimary />
      <div className='flex-1'>
        <Paths />
      </div>
      <FooterPrimary />
    </div>
  );
}

export default App;
