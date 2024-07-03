import React from 'react';
import photo1 from '../myphoto/photo_2024-06-08_23-31-39.jpg';
import photo2 from '../myphoto/photo_2024-06-08_23-09-33.jpg';
import photo3 from '../myphoto/photo_2024-06-08_23-09-50.jpg';
import photo4 from '../myphoto/photo_2024-06-08_23-09-55.jpg';

const Photo: React.FC = () => {
  return (
    <div>
      <h1 style={header1}>Photos</h1>
      <h3 style={heder3}>some photos from my life</h3>
      

      <img src={photo1} alt="winter photo" style={{ marginLeft: '290px', border: '3px solid rgb(222, 50, 100)', width: '218px', height: '284px' }} />
      <img src={photo2} alt="winter photo" style={{ marginLeft: '10px', border: '3px solid rgb(222, 50, 100)', width: '218px', height: '284px' }} />
      <img src={photo3} alt="summer photo" style={{ marginLeft: '10px', border: '3px solid rgb(222, 50, 100)', width: '218px', height: '284px' }} />
      <img src={photo4} alt="summer photo" style={{ marginLeft: '10px', border: '3px solid rgb(222, 50, 100)', width: '190px', height: '284px' }} />
    </div>
  );
}

const header1:React.CSSProperties = {
    fontFamily: 'DejaVu Sans Mono, monospace',
    fontSize: '50px',
    marginLeft: '650px',
};
const heder3:React.CSSProperties = {
    fontFamily: 'DejaVu Sans Mono, monospace',
    marginLeft: '600px',
    color: 'rgb(222, 50, 100)'
};


export default Photo;