import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import './image.css';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          name: { nin: ["background", "background2"] }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxHeight: 1080, maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className="image-container">
      <h1>View our Destinations</h1>
      <div className="image-grid">
        {data.allFile.edges.map((image, key) => {
          return (
            <GatsbyImage
              key={key}
              image={image}
              src={image.node.childImageSharp.fluid.src}
              className="image-item"
              fluid={image.node.childImageSharp.fluid.srcSet}
              alt={image.node.base.split('.')[0]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Image;
