import React from 'react'
import './styles.scss';
import PageHeaderContent from '../../components/pageHeaderContent';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaBriefcase} from 'react-icons/fa';
import resumeData from "./resume.js";


const experienceData = resumeData[0].experience;
const educationData = resumeData[1].education;


const Resume = () => {
  return (
    <section id='resume' className='resume'>
      <PageHeaderContent headerText="Resume"
        icon={<FaBriefcase size={40} />}
      />

      <div className='timeline'>

        <div className='timeline__experience'>
          <h3 className='timeline__experience__header-text'>Experience</h3>
          <VerticalTimeline layout={'1-column'} lineColor='var(--yellow-theme-main-color)'>

            {
              experienceData.map((items, i) => (
                <VerticalTimelineElement key={i} className="timeline__experience__vertical-timeline-element"
                  contentStyle={{
                    background: 'none',
                    color: 'var(--yellow-theme-sub-text-color)',
                    border: '2px solid var(--yellow-theme-main-color)',
                  }}
                  date={<span className='date-text'>{items.duration}</span>}
                  icon={<img className='img-logo-round' src={items.logo} alt={items.company} />}
                  iconStyle={{
                    background: '#fff',
                    color: 'var(--yellow-theme-background-color)',
                    border: '2px solid var(--yellow-theme-main-color)',
                    height: '50px',
                    width: '50px',

                  }}
                >

                  <div className='vertical-timeline-element-title-wrapper'>
                    <h2>{items.company}</h2>
                    <h5> {items.address}</h5>
                    <br/>
                    <h1>{items.role}</h1>
                    <h4 className='h4__heading'> {items.techstack}</h4>  
                    <br/> 
                    <h3 className='h3__heading'>{items.description}</h3>

                  </div>
                </VerticalTimelineElement>
              ))
            }


          </VerticalTimeline>
        </div>


        <div className='timeline__education'>
          <h3 className='timeline__education__header-text'>Education</h3>
          <VerticalTimeline layout={'1-column'} lineColor='var(--yellow-theme-main-color)'>

            {
              educationData.map((items, i) => (
                <VerticalTimelineElement key={i} className="timeline__experience__vertical-timeline-element"
                  contentStyle={{
                    background: 'none',
                    color: 'var(--yellow-theme-sub-text-color)',
                    border: '2px solid var(--yellow-theme-main-color)',
                  }}
                  date={<span className='date-text'>{items.duration}</span>}
                  
                  icon={<img className='img-logo-round' src={items.logo} alt={items.institution} />}
                  iconStyle={{
                    background: '#fff',
                    color: 'var(--yellow-theme-background-color)',
                    border: '2px solid var(--yellow-theme-main-color)',
                    height: '50px',
                    width: '50px',
                  }}>

                  <div className='vertical-timeline-element-title-wrapper'>
                  <h2>{items.institution}</h2>
                  <h5> {items.address}</h5>
                  <br/>
                  <h1> {items.board}</h1>
                  <br/>
                  <h3 className='h3__heading'>{items.degree}</h3>
                  <h4 className='h4__heading'>{items.department}</h4>
                  </div>
                </VerticalTimelineElement>
              ))
            }

          </VerticalTimeline>
        </div>


      </div>
    </section>
  )
}
export default Resume;
