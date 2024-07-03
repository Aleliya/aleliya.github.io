import React from 'react';
import gihublogo from '../icon-for-social-media/icons8-github-50.png';
import emaillogo from '../icon-for-social-media/icons8-новый-пост-50.png';
import tglogo from '../icon-for-social-media/icons8-телеграм-50.png';


const Contact: React.FC = () => {
  return (
    <div>
      <h1 style={header1}>Contact Me</h1>
      
      <a href="https://github.com/Aleliya"><img src={gihublogo} alt="github logo" style={{marginLeft: '600px'}}/></a>
      <a href="mailto:aleliya2005@gmail.com"><img src={emaillogo} alt="email logo" style={{marginLeft: '100px'}}/></a>
      <a href="//t.me/aleliya_turushkina"><img src={tglogo} alt="telegram logo" style={{marginLeft: '100px'}}/></a>

      <h3 style={g}>github</h3>
      <h3 style={e}>email</h3>
      <h3 style={t}>telegram</h3>
    </div>
  );
}

const header1:React.CSSProperties = {
    fontFamily: 'DejaVu Sans Mono, monospace',
    fontSize: '50px',
    marginLeft: '650px',
};
const g:React.CSSProperties = {
    fontFamily: 'DejaVu Sans Mono, monospace',
    marginLeft: '595px',
    top: '178px',
    position: 'absolute',
};
const e:React.CSSProperties = {
    fontFamily: 'DejaVu Sans Mono, monospace',
    marginLeft: '750px',
    top: '178px',
    position: 'absolute',
};
const t:React.CSSProperties = {
    fontFamily: 'DejaVu Sans Mono, monospace',
    marginLeft: '890px',
    top: '178px',
    position: 'absolute',
};


export default Contact;