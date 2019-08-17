import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ( { percentage, color } ) => {
    return (
        <div>
            <h2>Overall Chance of Getting an Allergy</h2>
            <div style={{ height: 250, width: 250 }}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} 
                styles={buildStyles({
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                    pathColor: color,
                    textColor: '#f88',
                    trailColor: '#d6d6d6'
                })}
            />
            </div>
        </div>
    )
}

export default ProgressBar