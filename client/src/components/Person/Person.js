import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Person = (props) => {
  console.log(props);
  const { name } = props;
  return (
    <div className='container' style={{padding:'2em',margin:'1.5em', fontSize:'20px'}}>
      <h1>
        I am {name}.
      </h1>
      <h3>
        I am from my {props.country}
      </h3>

      <p>
        {props.children}
      </p>
    </div>
  )
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

export default Person