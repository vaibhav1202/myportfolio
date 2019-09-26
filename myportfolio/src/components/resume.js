import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={require("./myimgcircle.png")}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Vaibhav Agrawal</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I'm a full stack web developer and a machine learning engineer(Data Science Enthusiast). My goal is to use my skills and knowlegde in the field to build dynamic websites which have a friendly UI/UX and to develop a predictive modeling which helps in providing data-driven, action-oriented solutions to challenging business problems.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>MD-165, Phase-4, Kabir Nagar, Raipur, CG</p>
            <h5>Phone</h5>
            <p>+91 8770925518</p>
            <h5>Email</h5>
            <p>agrawalvaibhav12@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Hobbies</h5>
            <p>Reading books, poems and articles</p>
            <p>Exploring new places</p>
            <p>Poem and article writing</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2016}
              endYear={2020}
              schoolName="CSVTU, Bhilai"
              schoolDescription="Persueing BE from CSVTU, Bhilai. Specializing in Computer science and Engineering. "
               />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2018}
              jobName="Assistant Trainer"
              jobDescription="I was an assistant trainer of Core Java at EFFCON, Raipur. I had to clear the doubts of the students and make some projects and help in the projects of them."
              />

              <Experience
                startYear={2019}
                endYear={2019}
                jobName="Machine leaning engineer"
                jobDescription="I was a Machine learning engineer at EFFCON, Raipur. I had to make few projects and clear the doubts and help in the projects of the students."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="JavaScript"
                progress={70}
                />
                <Skills
                  skill="Python"
                  progress={80}
                  />
                <Skills
                  skill="Java"
                  progress={60}
                  />
                <Skills
                  skill="MySQL"
                  progress={65}
                  />
                   <Skills
                    skill="React"
                    progress={50}
                    />
                  <Skills
                    skill="Machine learning"
                    progress={70}
                    />
                  <Skills
                    skill="Deep learning"
                    progress={50}
                    />
                  <Skills
                    skill="Django"
                    progress={70}
                    />
                    <Skills
                    skill="REST API"
                    progress={70}
                    />
                  <Skills
                    skill="NodeJS"
                    progress={60}
                    />
                  <Skills
                    skill="Express"
                    progress={70}
                    />
                    <Skills
                      skill="MongoDB"
                      progress={50}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
