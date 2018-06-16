const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

const buttonsInstance = (
  <div className="well" style={wellStyles}>
    <Button bsStyle="primary" bsSize="large" block>
      Login
    </Button>
    <Button bsSize="large" block>
      Sign Up!
    </Button>
  </div>
);

export default buttonsInstance;