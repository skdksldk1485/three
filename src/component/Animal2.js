import React from 'react';
import styled from 'styled-components';

const Animal2 = (props) => {


const Navitem = styled.div`
  width: 100%;  
`;

  return (
      <Navitem className="Animal__Box__Poster">{props.title}</Navitem>
  );
};

export default Animal2;
