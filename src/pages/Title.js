import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Title = (props) => {
  return (
    <Jumbotron fluid className="jumbotron">
      <h1 className="title-app">{props.title}</h1>
    </Jumbotron>
  );
};

export default Title;
