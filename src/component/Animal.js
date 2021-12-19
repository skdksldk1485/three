import React from 'react';

const Animal = (props) => {

  return (
    <div className="Animal">
      <div className="Animal__Box__Poster"><img src={props.poster} alt={props.title} /></div>
      <div className="Animal__Box__Select" style={{ display: "flex", margin: "15px"}}>
        <div>좋아요</div>
        <div>싫어요</div>
      </div>
    </div>
  );
};

export default Animal;
