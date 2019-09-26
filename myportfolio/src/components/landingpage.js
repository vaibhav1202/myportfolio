import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={require("./myimgcircle.png")}
              alt="avatar"
              style={{height: '250px', paddingTop:"50px"}}

              // className="avatar-img"
              />

            <div className="banner-text">
              <h2>Full Stack Web Developer/ Machine Learning Engineer</h2>

            <hr/>

          <p>HTML/CSS | Bootstrap | Python | JavaScript | Java | MySQL | React | Machine Learning | Deep Learning | Django | NodeJS | Express | MongoDB</p>
       
        <div className="social-links">
        
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/vaibhav-agrawal-b97943147" >
            <i className="fa fa-linkedin-square"  />
          </a>

          {/* Github */}
          <a href="https://github.com/vaibhav1202" >
            <i className="fa fa-github-square"  />
          </a>

          {/* Facebook */}
          <a href="https://m.me/vaibhav.agrawal.927" >
            <i className="fa fa-facebook-square"  />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/_vaibhavagrawal/">
            <i className="fa fa-instagram"  />
          </a>

        </div>
            </div>
          </Cell>
      

        </Grid>
      </div>
    )
  }
}

export default Landing;
