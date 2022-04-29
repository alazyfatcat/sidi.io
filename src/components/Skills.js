import React, { ReactDOM, Component, useState } from 'react';
import data from "../assets/data/data.json"; 
import './skills.css';

class Skills extends React.Component{
// const Skills = () => {
  constructor(props) {
    super(props);
    this.state = {addClass: false}
  }
  toggle() {
    this.setState({addClass: !this.state.addClass});
  }
  render() {
    let boxClass = ["box"];
    if(this.state.addClass) {
      boxClass.push('blue');
    }
		return(
            <div className='skills' id='skills'>
                {
                  data.Skills.map((skill) => {
                    return (
                      <div>
                        <h4>{skill.Area}</h4>
                        <div className='title'> 
                          <h5>{skill.Title}</h5>
                          <h5>{skill.Date}</h5>
                        </div>
                        <ul>
                          {
                            skill.SkillSet.map((skillDetail) => {
                              return (
                                  <li className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>
                                    {skillDetail.Name}
                                  </li>
                              );
                            })
                          }
                        </ul>
                      </div>
                    );
                  })
                } 
            </div>
      );
  }
}


export default Skills;