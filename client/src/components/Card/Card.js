import react from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const Card =(props) => {
return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.trainerName}</CardTitle>
          <CardSubtitle>{props.description}</CardSubtitle>
          <CardText>{props.longerdescription}</CardText>
          <Button>Select</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Card;