import React, { Component } from 'react'
import { graphql } from 'gatsby'

// Scroll animation library
import ScrollMagic from 'scrollmagic'

// Sass wrapper
import '../sass/wrapper.scss'

// Components
import SEO from '../components/seo'

// Sections
import Welcome from '../components/sections/welcome'
import About from '../components/sections/about'
import Work from '../components/sections/work'
import Contact from '../components/sections/contact'
import ScrollAnimation from '../components/scroll_animation'

 class Index extends Component {
  constructor(props) {
    super(props);

    this.files = props.data.allMarkdownRemark.edges;
    this.lang = this.files[0].node.frontmatter.lang;

    this.sm_controller = new ScrollMagic.Controller();
  }

  componentWillUnmount() {
    this.sm_controller.destroy(true);
  }

  render () {
    return (<>
        <SEO lang={ this.lang }/>
        <ScrollAnimation/>

        <Welcome files={ this.files } sm_controller={ this.sm_controller }  />
        <About files={ this.files } />
        <Work files={ this.files } />
        <Contact files={ this.files } />
    </>)
  }
}

export default Index;

// Queries every content file, those will be used to build the final index
// through the 'inject' function. The language is given by the context on
// page creation (see 'gatsby-node.js' for more details).
export const pageQuery = graphql`
  query ($lang: String!) {
    allMarkdownRemark ( filter: {frontmatter: {lang: {eq: $lang}}} ) {
      edges {
        node {
          html
          frontmatter {
            title
            beautifulTitle
            lang
            tag
          }
        }
      }
    }

    welcomeImage: file( relativePath: { eq: "welcomeImage.jpg" } ) {
      childImageSharp {
        fluid( quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
