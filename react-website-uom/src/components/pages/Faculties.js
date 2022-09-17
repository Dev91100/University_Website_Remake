import React from 'react';
import '../../App.css';
import { RectangularInfoCard } from '../RectangularInfoCard/RectangularInfoCard'

function Faculties() {
  return (
    <div style={{height: '100vh'}}>
      {/* <h1 className='faculties'>FACULTIES</h1> */}
      <RectangularInfoCard/>
      <RectangularInfoCard/>
    </div>
  );
}

export default Faculties;