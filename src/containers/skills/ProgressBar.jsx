import React from 'react';
import { Line } from 'rc-progress';

const ProgressBar = (props) => {
    const { percentage } = props;
    
  return (
    <div style={{ width: '300px', position: 'relative', textAlign: 'center' }}>
      {/* Line progress bar */}
      <Line 
        percent={percentage} 
        strokeWidth={10}
        strokeColor="var(--yellow-theme-progress-bar)" 
        trailWidth={10}
        trailColor="var(--yellow-theme-sub-text-color)"
      />
      
      {/* Display the percentage as a label */}
      <div 
        style={{
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          fontSize: '16px',
          color: 'var(--yellow-theme-sub-text-color)',
          fontWeight: 'bold',
        }}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
