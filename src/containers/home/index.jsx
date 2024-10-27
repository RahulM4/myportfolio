import { useNavigate } from 'react-router-dom';
import React from 'react';
import './styles.scss';
import { Animate } from 'react-simple-animate';

const Home = () => {

  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate('/contact');
  }


  return (
    <section id='home' className='home'>
      <div className='home__text-wrapper'>
        <h1>
          Hello, I'm Rahul Mahto
          <br />
          Full Stack Developer
        </h1>
      </div>

      <Animate play duration={1.5} delay={1} start={{
        transform: 'translateY(550px)'
      }}
        end={{
          transform: 'translateX(0px)'
        }}>
        <div className='home__container-wrapper'>
          <div className='home__contact-me'>
            <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          </div>
          <div className='home__download-resume'>
            <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1SVEqnUjCKO7iQGrzyBIqjBnmvQmRMyA0/view?usp=sharing" download="Rahul_Mahto_SDE.pdf">
              <button >
                 Resume 
              </button>
            </a>
          </div>
        </div>
      </Animate>

    </section>
  );
};

export default Home;
