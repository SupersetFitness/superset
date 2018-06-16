import react from 'react';

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