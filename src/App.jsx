import './App.css'
import { Navbar } from './Components/Navbar';
import { Winners } from './Components/WInners';


export const App = () => {
  return (
   
      <div className='w-full'>
        <Navbar />
        <Winners />
      </div>
   
  );
};
