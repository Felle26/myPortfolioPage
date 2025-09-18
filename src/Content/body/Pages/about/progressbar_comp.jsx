import './skillbar.css'

const Progress_Bar_Comp = ({ skill }) => {
  return (
    <div className="skill">
      <h4>
        {skill.level} - {skill.name}
      </h4>

      <div className="skill-bar">
        <div
          className="skill-percentage"
          style={{ width: `${skill.level}` }}
        ></div>
      </div>
    </div>
  );
}

export default Progress_Bar_Comp
