import React from 'react';
import styled from 'styled-components';

function Skills(props) {

  const Skill = styled.li`
    border: 1px solid #57ABA8;
    border-radius: 4px;
    font-size: 14px;
    margin: 10px;
    padding: 7px;
    transition: all ease .3s;
    cursor: default;
    &:hover {
      background: #57ABA8;
      color: #FFF;
      transition: all ease .3s;
    }
  `;

  const SkillList = styled.ul`
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 90%;
  `;

  const SkillTitle = styled.h6`
    font-size: 18px;
    color: #FC0055;
    margin: 30px auto 15px;
  `;

  return(
    <div>
      <SkillTitle>Skills</SkillTitle>
      <SkillList>
        {
          props.skills.map((skill) => (
            <Skill>{skill}</Skill>
          ))
        }
      </SkillList>
    </div>
  );
}

export default Skills;