import './styles.scss';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import React, { useState } from 'react'
import { projectsData, filterData } from './projects.js';



const Portfolio = () => {
  const [filterdValue, setFilterValue] = useState(1);

  const [hoveredIndex, setHoveredIndex] = useState(null);


  const HandleHover = (index) => {
    setHoveredIndex(index);
  }
  // console.log(hoveredIndex);

  const handleFilter = (currId) => {
    setFilterValue(currId)
  }



  const filterItems = filterdValue === 1 ? projectsData : projectsData.filter((item) => item.id === filterdValue);
  // console.log(filterItems);




  return (
    <section id='portfolio' className='portfolio'>
      <PageHeaderContent headerText="Projects"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className='portfolio__content'>
        <ul className='portfolio__content__filter'>
          {
            filterData.map((item) => (
              <li className={item.Id ===filterdValue ? 'active' : ''} key={item.Id}  onClick={() => handleFilter(item.Id)}>
                {item.label}
              </li>
            ))
          }
        </ul>
        <div className='portfolio__content__cards'>
          {
            filterItems.map((item,index) => (
              <div key={`cardItem${item.title.trim()}`} className='portfolio__content__cards__card'
              onMouseEnter={()=>HandleHover(index)}
              onMouseLeave={()=>HandleHover(null)}
              >
                <div className='portfolio__content__cards__card__image-wrapper'>
                  <a target='_blank' rel="noreferrer" href={item.projectLink} >
                    <img  src={item.imageUrl} alt={item.title} />
                  </a>
                </div>

                <div className='overlay'> 
                {
                  
                  hoveredIndex === index && (
                    <div>
                      {/* <p>{item.title}</p> */}
                      <p dangerouslySetInnerHTML={{ __html: item.title }} />
                      <button>View Project</button>
                    </div>
                  )
                }

                </div>

              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}
export default Portfolio;
