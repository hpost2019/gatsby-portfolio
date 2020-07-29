import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import ProjectCard from "./ProjectCard"
import Grid from "@material-ui/core/Grid"


function Projects() {
    const data = useStaticQuery(
        graphql`
            query {
                allProjectsJson {
                edges {
                    node {
                        id
                        name
                        technology
                        description
                        imgLocation
                        github
                        html
                        }
                    }
                }
            }`
    )
  console.log(data)

  return (
    <div>
        <h1>My Projects</h1>
        <p>These are a mixture of projects I did for school, to learn a new topic, or
            as gig work.
        </p>
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            >
        {data.allProjectsJson.edges.map(({ node }) => (
            <Grid item style={{paddingRight: `20px`}} >
                <ProjectCard
                    name={node.name}
                    technology={node.technology}
                    description={node.description}
                    imgLocation={node.imgLocation} 
                    github={node.github}
                    html={node.html}
                    />
            </Grid>
            )
        )}
        </Grid>
    </div>
  )}

export default Projects