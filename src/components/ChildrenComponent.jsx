import React from 'react'

const ChildrenComponent = ({name, text}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>{text}</p>
    </div>
  );
};

export default ChildrenComponent;