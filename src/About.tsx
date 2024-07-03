import React from 'react';


const About: React.FC = () => {
  return (
    <div>
      <h1 style={header1}>About Me</h1>
        <h2 style={maintext}>
            I am Aleliya. I am 18 years old and I am an bachelor student at Innopolis University.
            I am studying in the field of Data Science and Artificial Intelligence.
            We study a lot of interesting and useful subjects.
        </h2>
    </div>
  );
}

const header1:React.CSSProperties = {
    fontFamily: 'DejaVu Sans Mono, monospace',
    fontSize: '50px',
    marginLeft: '650px',
};
const maintext:React.CSSProperties = {
  fontFamily: 'DejaVu Sans Mono, monospace',
  marginLeft: '250px',
  marginRight: '150px',
  border: '2px solid rgb(222, 50, 100)',
  width: '1000px',
  height: '120px',
  paddingLeft: '30px',
  borderRadius: '20px',
  paddingTop: '30px',
};


export default About;