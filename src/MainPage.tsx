import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClickAbout = () => {
    navigate('/about');
  }
  const handleClickPortfolio = () => {
    navigate('/portfolio');
  }
  const handleClickPhoto = () => {
    navigate('/photos');
  }
  const handleClickContact = () => {
    navigate('/contact');
  }
  const handleClickComic = () => {
    navigate('/comic');
  }

  return (
    <div>
      <h1 style={header1}>Aleliya Turushkina</h1>
      <div style={body}>
        <button style={b1} onClick={handleClickAbout}>About Me</button>
        <button style={b2} onClick={handleClickPortfolio}>Portfolio</button>
        <button style={b3} onClick={handleClickPhoto}>Photos</button>
        <button style={b4} onClick={handleClickContact}>Contact Me</button>
        <button style={b5} onClick={handleClickComic}>Comic</button>
      </div>
    </div>
  );
}

const body:React.CSSProperties = {
    padding: '0 575px'
};
const header1:React.CSSProperties = {
    fontFamily: 'DejaVu Sans Mono, monospace',
    marginLeft: '600px',
};
const b1:React.CSSProperties = {
    border: '2px solid grey',
    borderRadius: '30px',
    backgroundColor: 'rgb(237, 83, 119)',
    width: '150px',
    height: '60px',
    paddingLeft: '15px',
    fontFamily: 'Andale Mono, monospace',
    fontSize: 'large',
    display: 'block',
    marginTop: '30px',
};
const b2:React.CSSProperties = {
    ...b1,
    position: 'absolute',
    marginLeft: '200px',
    top: '59px',
};
const b3:React.CSSProperties = {
    ...b1,
    position: 'absolute',
    top: '178px',
};
const b4:React.CSSProperties = {
    ...b1,
    position: 'absolute',
    marginLeft: '200px',
    top: '178px',
};
const b5:React.CSSProperties = {
    border: '2px solid grey',
    borderRadius: '15px',
    backgroundColor: 'rgb(237, 83, 119)',
    width: '350px',
    height: '60px',
    paddingLeft: '15px',
    fontFamily: 'Andale Mono, monospace',
    fontSize: 'large',
    display: 'block',
    position: 'absolute',
    top: '300px',
};

export default MainPage;