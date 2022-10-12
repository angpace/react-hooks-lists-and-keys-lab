import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
  projects.map((each)=> {
    return (
      <div id={each.id} key={each.id} >
        <h2>My Projects</h2>
        <div id="project-list">
          <ProjectItem name={each.name} about={each.about} technologies={each.technologies}/>
          </div>
      </div>
    );
  })
  )
}

export default ProjectList;
