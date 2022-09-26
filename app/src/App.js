import NavBarTop from './Components/NavBarTop';
import NavBarLeft from './Components/NavBarLeft.js';
import { useSelector } from 'react-redux';

import './index.css';

function App() {
  const theme = useSelector(state => state.theme);
  const nums = useSelector(state => state.numArray);

  const max = Math.max(...nums)
  console.log(max)


  return (
    <div className={`App-Container-${theme}`}>
      <NavBarTop />
      <NavBarLeft />
      <div className='body-container'>
        {nums?.map((each, i)=>(
          <div className={`each-number-${theme}`} style={{ height: `${each * 200 / max}px`}} key={i}>
            <span>{each}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
