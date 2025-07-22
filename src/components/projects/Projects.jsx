import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from "./Data";
import ProjectItems from "./ProjectItems";

const Projects = () => {
    const [item, setItem] = useState({ name: "All" });
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === "All") {
            setProjects(projectsData);
        }
        else{
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    },[item]);

    const handleClick = (e, index) => {
        console.log(index); // Log the index
        setItem({ name: e.currentTarget.textContent || "All" });
        setActive(index);
    };

    return (
        <div>
            <div className="project__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span onClick={(e) => handleClick(e, index)}
                              className={`${active === index ? 'active-project' : ''} project__item`}
                              key={index}>
                            {item.name}
                        </span>
                    )
                })}
            </div>
            {item.name !== "All" && projects.length === 1 ? (
                <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem 1rem' }}>
                    <div style={{ flex: 1 }}>
                        <ProjectItems item={projects[0]} />
                    </div>
                    <div style={{ flex: 1, background: '#fff', padding: '1.25rem', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginTop: 0 }}>Description</h3>
                        <p style={{ marginBottom: 0 }}>{projects[0].description}</p>
                    </div>
                </div>
            ) : (
                <div className="project__container container grid">
                    {projects.map((item) => {
                        return <ProjectItems item={item} key={item.id}/>
                    })}
                </div>
            )}
        </div>
    );
}

export default Projects;
