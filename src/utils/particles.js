import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 



const ParticlesComponent = (props) => {

  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {

      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);


  const options = useMemo(() => ({
    background: {
      color: {
        value: "#1d1d1d",  // Dark background for contrast
      },
    },
    fpsLimit: 120,  // High FPS for smooth animation
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",  // Add new particles on click
        },
        onHover: {
          //enable: true,
          mode: "grab",  // Grab mode on hover for interaction
        },
      },
      modes: {
        push: {
          quantity: 5,  // Push more particles on click
        },
        grab: {
          distance: 200,  // Increase grab distance
          links: {
            opacity: 1,  // Make the connection links stronger when grabbed
          },
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: [  "#FFC300" ],  // Vibrant color palette for particles
      },
      links: {
        color: "#FFFFFF",
        distance: 120,  // Reduced distance for closer connections
        enable: true,
        opacity: 0.5,  // Increase opacity for better visibility
        width: 1.5,  // Thicker connection lines
      },
      move: {
        direction: "random",  // Random direction for more variation
        enable: true,
        outModes: {
          default: "out",  // Particles move out instead of bouncing back
        },
        random: false,  // Smooth movement
        speed: 5,  // Increase speed for a more dynamic effect
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,  // Control particle density
        },
        value: 200,  // More particles for a richer effect
      },
      opacity: {
        value: 0.8,  // Slightly transparent for subtle look  
      },
      shape: {
        type: ["circle", "triangle",  "square"],  // Variety of shapes for more visual interest
      },
      size: {
        value: { min: 1, max: 5 },  // Larger size range for more variety
      },
    },
    detectRetina: true,  // Enable retina detection for sharper visuals
  }), []);
  if(init)
  return <Particles id={props.id}  options={options} />; 
};

export default ParticlesComponent;