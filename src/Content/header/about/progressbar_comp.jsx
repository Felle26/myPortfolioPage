import React from 'react'
import './skillbar.css'

const Progress_Bar_Comp = ({ skill }) => {
  return (
    <div>
      <div className="skill">
        <h4>{skill.name}</h4>
        <div className="skill-bar">
          <div className="skill-percentage" style={{ width: `${skill.level}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default Progress_Bar_Comp
