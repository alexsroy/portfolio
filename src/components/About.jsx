import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
     
      <div className="about-content">
        <div className="about-text">
          <p>
            Software developer based in Halifax, Nova Scotia, with interests in robotics, ocean technology, 
            and web development. I hold a Bachelor’s degree in Computer Science from Dalhousie University, 
            where I also completed multiple DevOps internships with MOBIA.
          </p>
          <span>GitHub <a href="https://github.com/alexsroy"> @alexsroy</a> </span>
          <br></br>
          <span>LinkedIn <a href="https://linkedin.com/alexsroy"> @alexsroy</a> </span>
          <br></br>
          <span>Email: <a href="mailto:alexanderroy956@gmail.com"> alexanderroy956@gmail.com</a></span>
        </div>

      </div>
    </section>
  );
}

export default About; 
