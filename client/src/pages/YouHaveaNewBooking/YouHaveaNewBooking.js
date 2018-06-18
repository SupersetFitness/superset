import react from 'react';

const NewBooking = () => {
    return (
        <div>
            <p>Hello, {props.username}. You have a new booking!</p>
            <Card/>
            <Button>Accept</Button>
            <Button>Decline</Button>
        </div>
    )
}

export default NewBooking;