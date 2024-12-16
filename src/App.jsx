import './App.css'
import { Navbar } from './Components/Navbar';
import { Winners } from './Components/Winners';
import { Footer } from './Components/Footer';

export const App = () => {
  return (
   
      <div className='main_bg w-full relative'>
        <Navbar />
        <Winners />
        <Footer className='fixed left-[-20px]'/>
      </div>
   
  );
};
