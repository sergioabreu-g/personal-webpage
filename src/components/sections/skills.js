import React, { Component } from 'react'
import PropTypes from 'prop-types'
import inject from '../../utils/injector'

import Arrow from '../../components/arrow'

class Skills extends Component {
  render() {
    return (
      <div data-aos="fade-right" id="skills-section" className = "container skills">
        <div dangerouslySetInnerHTML = {{ __html: inject(this.props.files, 'skills') }} />

        <Arrow target_id="contact-section"/>
      </div>
    );
  }
}

Skills.propTypes = {
  files: PropTypes.array.isRequired,
}

export default Skills
