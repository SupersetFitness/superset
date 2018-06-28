import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import Example from '../Jumbotron';
import StarRating from '../../components/StarRating/StarRating'

const Name = (props) => {
return (
    <div>
      <Example
        
      />
      <Card>
        <CardBody>
          <CardTitle>{props.username}</CardTitle>
          <CardText>{props.bio}</CardText>
          <StarRating/>
          <Button>Select</Button>
        </CardBody>
      </Card>

    </div>
  );
};

export default Name;