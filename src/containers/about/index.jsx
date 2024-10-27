
import './styles.scss';
import { DiApple, DiAndroid, DiVisualstudio } from 'react-icons/di';
import { FaDev, FaReact, FaNode, FaGithub, FaPython, FaJava, FaLinux, FaHtml5, FaCss3, FaJs, FaSass, FaGit, FaCpp, FaAndroid, FaDatabase } from 'react-icons/fa';
import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
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
            play duration={1.5} delay={1} start={{
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
            play duration={1.5} delay={1} start={{
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
                  <li key={key}>
                    <span className='title'>{item.label} :</span>
                    <span className='value'>{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate>
          {/* <div className='location-map'>
          <h3>Location</h3>   
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2871.3307707688027!2d85.97266901527202!3d25.98908594524119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edc176e95797a5%3A0xcb979802def23993!2sRahul%20Mahto&#39;%20Home!5e1!3m2!1sen!2sin!4v1729742483270!5m2!1sen!2sin" 
      style={{border:1,width:"700px",height:"500px"}}></iframe> 

      </div> */}
        </div>
        <div className='about__content__serviceWrapper'>
          <Animate
            play duration={1.5} delay={1} start={{
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
                <DiApple size={40} color='var(--yellow-theme-main-color)' />
              </div>

            </div>
          </Animate>

        </div>
      </div>

     
    </section>
  )
}
export default About;
