import React from 'react'
import './styles.scss';
import { DiAndroid, DiVisualstudio } from 'react-icons/di';
import { FaDev, FaLock, FaDatabase } from 'react-icons/fa';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from 'react-simple-animate';
import { FaGithub, FaLinkedin, FaCode  } from 'react-icons/fa';

const jobSummary = 'Detail-oriented and results-driven Software Engineer with a strong background in backend development and a proven track record of delivering innovative solutions. Proficient in multiple programming languages including C++, Java, JavaScript, Python, and SQL, with hands-on experience in web application development using the MERN stack. Demonstrated expertise in machine learning projects, notably in pneumonia detection from chest X-ray images using federated learning. Adept at identifying security vulnerabilities and recommending mitigation strategies. A collaborative team player with excellent problem-solving skills, committed to leveraging technology for impactful results.';
const personalDetails = [
  {
    label: "Name",
    value: "Rahul Mahto"
  },
  {
    label: "Age",
    value: "24"
  },
  {
    label: "Address",
    value: "Darbhanga, Bihar, India"
  },
  {
    label: "Email",
    value: "rahuliit448@gmail.com"

  }, {
    label: "Phone",
    value: "+91 9546536837"
  }
]




const About = () => {
  return (
    <section id='about' className='about'>
      <PageHeaderContent headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className='about__content'>
        <div className='about__content__personalWrapper'>
          <Animate
            play duration={1} delay={1} start={{
              transform: 'translateX(-900px)'
            }}
            end={{
              transform: 'translateY(0px)'
            }}
          >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play duration={1} delay={1} start={{
              transform: 'translateX(500px)'
            }}
            end={{
              transform: 'translateY(0px)'
            }}
          >
            <h3 className='personalInformationHeaderText'>Personal Information</h3>
            <ul >
              {
                personalDetails.map((item, key) => (
                  <li key={key} style={{"list-style-type": "none"}}> 
                    <span className='title'>{item.label} :</span>
                    <span className='value'>{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate>

          <Animate
            play duration={1} delay={1} start={{
              transform: 'translateX(-900px)'
            }}
            end={{
              transform: 'translateY(0px)'
            }}
          >
            <h3 className='personalInformationHeaderText'>Social Profiles</h3>
           
              {/* social medid handle links  */}
              <li style={{"list-style-type": "none"}}>
                {/* Lnkedin */}
                <a href="https://www.linkedin.com/in/rahulmahto4/" target="_blank" rel="noreferrer">
                  <FaLinkedin size={40} color='var(--yellow-theme-main-color)' />
                </a>
                {/* Github */}
                <a href="https://github.com/RahulM4" target="_blank" rel="noreferrer">
                  <FaGithub size={40} color='var(--yellow-theme-main-color)' />
                </a>
                {/* LeetCode */}
                <a href="https://leetcode.com/u/rahulforcoding4/" target="_blank" rel="noreferrer">
                  <FaCode  size={40} color='var(--yellow-theme-main-color)' />
                  </a>
              </li>

          </Animate>


        </div>
        <div className='about__content__serviceWrapper'>
          <Animate
            play duration={1} delay={1} start={{
              transform: 'translateX(500px)'
            }}
            end={{
              transform: 'translateY(0px)'
            }}
          >
            <div className='about__content__serviceWrapper__innerContent'>

              <div>
                <FaDev size={40} color='var(--yellow-theme-main-color)' />
              </div>
              <div>
                <DiAndroid size={40} color='var(--yellow-theme-main-color)' />
              </div>
              <div>
                <FaDatabase size={40} color='var(--yellow-theme-main-color)' />
              </div>
              <div>
                <FaLock size={40} color='var(--yellow-theme-main-color)' />
              </div>
              <div>
                <DiVisualstudio size={40} color='var(--yellow-theme-main-color)' />
              </div>

            </div>
          </Animate>
         
        </div>

      </div>


    </section>
  )
}
export default About;
