import NavBarTop from './Components/NavBarTop';
import NavBarLeft from './Components/NavBarLeft.js';
import { useSelector } from 'react-redux';

import './index.css';
import { useEffect, useState } from 'react';

function App() {
  const theme = useSelector(state => state.theme);
  let nums = useSelector(state => state.numArray);
  const [changed, setChanged] = useState(false);
  const [sorted, setSorted] = useState([...nums])
  const max = Math.max(...nums)


  Array.prototype.mySort = function (func) {
    if (this.length <= 1) return this;

    if (!func) func = (left, right) => {
      return left < right ? -1 : left > right ? 1 : 0;
    };

    const midpoint = Math.floor(this.length / 2);
    const sortedLeft = this.slice(0, midpoint).mySort(func);
    const sortedRight = this.slice(midpoint).mySort(func);
    return merge(sortedLeft, sortedRight, func);
  };

  function merge(left, right, comparator) {
    let merged = [];
    while (left.length && right.length) {
      // console.log('LEFT', left)
      // console.log('RIGHT', right)
      // console.log('COMPARATOR', comparator())
      switch (comparator(left[0], right[0])) {
        case -1:
            merged.push(left.shift());
          // console.log('MERGED', merged)
          break;
        case 0:
          merged.push(left.shift());
          // console.log('MERGED', merged)
          break;
        case 1:
          merged.push(right.shift());
          // console.log('MERGED', merged)
          break;
      }
    }

    merged = merged.concat(left, right);
    return merged;
  }

  // const sort = () => {
  //   setSorted(nums.sort((a,b)=>a - b))
  // }

  useEffect(()=> {
    nums = sorted
  }, [sorted])

  useEffect(()=> {
    setChanged(false)
  }, [nums])

  const sort = () => {
    setChanged(true)
    setSorted(nums.mySort())
  }
  console.log(nums)


  return (
    <div className={`App-Container-${theme}`}>
      <NavBarTop />
      <NavBarLeft />
      <div className='body-container'>
        {!changed ? nums?.map((each, i) => (
            <div className='each-number-container' key={i}>
            <div className={`each-number-${theme}`} style={{ height: `${each * 200 / max}px`}} id={i} data-num={each}>
            </div>
            <span className='each-number'>{each}</span>
            </div>
          )
        ) : sorted?.map((each, i) => (
          <div className='each-number-container' key={i}>
          <div className={`each-number-${theme}`} style={{ height: `${each * 200 / max}px`}} id={i} data-num={each}>
          </div>
          <span className='each-number'>{each}</span>
          </div>
        )
      )}
      </div>
      <button className='button-go' onClick={sort}>do it!</button>
    </div>
  );
}

export default App;
