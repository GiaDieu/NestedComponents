import React from 'react';
import Certification from './Certification';
import Skills from './Skills';
import Mock from '../Mock/Mock';

const Education = () => {
    const {skills} = Mock;
    return (
        <div>
          <Certification />
          <Skills languages = {skills} />
        </div>
    );
}
export default Education;