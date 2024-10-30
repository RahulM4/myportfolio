import PageHeaderContent from '../../components/pageHeaderContent';
import React from 'react';
import './styles.scss';
import { AnimateKeyframes } from 'react-simple-animate';
import ProgressBar from './ProgressBar';
import skillsData from "./skills.js"; // Ensure this is correct
import {FaLaptopCode} from 'react-icons/fa'
const Skills = () => {
 

  return (
    <section id='skills' className='skills'>
      <PageHeaderContent headerText="Tech Skills"
        icon={<FaLaptopCode size={40} />}
      />

      <div className='skills__content-wrapper'>
        {
          skillsData.map((items, k) => (
            <div key={k} className='skills__content-wrapper__inner-content'>

              <AnimateKeyframes
                play
                duration={1}
                keyframes={["transform: translateX(-500px)", "transform: translateX(0px)"]}
                iterationCount="1"
              >
                <h3 className='skills__content-wrapper__inner-content__category-text'>{items.label}</h3>

                {
                  items.skills.map((item, j) => (
                    <AnimateKeyframes
                      play
                      duration={1}
                      keyframes={["opacity: 0", "opacity: 1"]}
                      iterationCount="1"
                      key={j} // Add key here to ensure unique identification
                    >
                      <div className='progressbar-wrapper'>
                        <p>
                          {item.skillName}
                        </p>

                        <ProgressBar percentage={item.value} level={item.level || "Expert"} />
                      </div>
                    </AnimateKeyframes>
                  ))
                }
              </AnimateKeyframes>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills;
