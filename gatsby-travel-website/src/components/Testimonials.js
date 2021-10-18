import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaRegLightbulb } from "react-icons/fa"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { graphql, useStaticQuery } from "gatsby"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["testimonials1", "testimonials2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <TestimonialsContainer>
      <TopLine>Testimonials</TopLine>
      <Description>What People are Saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline
              style={{
                color: "#3fffa8",
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            />
            <h3>Sean Michaels</h3>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              aspernatur minus, autem incidunt quia, rem ducimus pariatur
              adipisci quae dolore, ullam exercitationem. Optio architecto
              similique laboriosam repudiandae eaque rerum praesentium."
            </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb
              style={{
                color: "#f9b19b",
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            />
            <h3>Sarah Kin</h3>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              aspernatur minus, autem incidunt quia, rem ducimus pariatur
              adipisci quae dolore, ullam exercitationem. Optio architecto
              similique laboriosam repudiandae eaque rerum praesentium."
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image, key) => (
            <Images
              key={key}
              image={image}
              fluid={image.node.childImageSharp.fluid}
              src={image.node.childImageSharp.fluid.src}
            />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`
const TopLine = styled.div`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`
const Description = styled.div`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
const Images = styled(GatsbyImage)`
  border-radius: 10px;
  height: 100%;
`
