import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Example from '../Jumbotron';
import StarRating from '../../components/StarRating/StarRating'
import './Name.css';

class Name extends React.Component {
  state = {
    modal :false
     
  };

  handleClick = () => {
    this.setState({
      modal: true
    })
    console.log(this.state.modal);
  }

  handleClose =() => {
    this.setState({
      modal:false
    })
  }

render () {
  
  return (
    <div>
       <Example
        
        />
     
      <Card>
        <CardBody>
          <CardTitle>Ryan Gosling</CardTitle>
          <img width="100%" src="https://i.gifer.com/T9yL.gif" alt="Card image cap" />
        </CardBody>
     
        <CardBody>
        <CardLink href="/History" id="review">{this.props.review}</CardLink> 
        {(this.props.page == "TrainerProf" || this.props.page=="History") ? <StarRating />  : null}
        
          <CardText>{this.props.bio}</CardText>
          <CardLink onClick={this.handleClick}>{this.props.book}</CardLink>
          {this.state.modal ? 
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Congrats! You have booked this trainer.</h5>
                </div>
                <div class="modal-body">
                  <p>Please make arrangements with your trainer to set up a location to meet.</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" onClick={this.handleClose} data-dismiss="modal">Close</button>
                </div>
              </div>
            </div> : null }
         
        </CardBody>
      </Card>
    </div>
  );
}
};

  

               


export default Name;
