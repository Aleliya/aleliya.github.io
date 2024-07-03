import React from 'react';


const Portfolio: React.FC = () => {
  return (
    <div>
      <h1 style={header1}>Portfolio</h1>
      <h3 style={maintext}>
            I know programming languages such as:
            <ul>
                <li>Java</li>
                <li>Python</li>
            </ul>
            At the moment, I am studying Front-end Web Development and, accordingly, programming  languages:
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
            </ul>
            I also work in the Math Helper project, which is a site where a user can upload their solution to a problem and receive feedback
        </h3>
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
    height: '350px',
    paddingLeft: '40px',
    borderRadius: '10px',
    paddingTop: '30px',
  };
export default Portfolio;