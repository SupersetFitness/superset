import React from "react";

import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';
 
const ExampleForm = () => (
  <Form render={({
    submitForm
  }) => (
    <form onSubmit={submitForm}>
      <Text field="firstName" placeholder='First Name' />
      <Text field="lastName" placeholder='Last Name' />
      <Text field="username" placeholder='username' />
      <Text field="email" placeholder='email' />
      <RadioGroup field="gender">
        <Radio value="male" />
        <Radio value="female" />
      </RadioGroup>
      <TextArea field="bio" />
      <Checkbox field="agreesToTerms" />
      <button type="submit">Submit</button>
    </form>
  )} />
)

(((INSERT PAYPAL HERE)))

export const Input = props => (
  <div className="form-group">
    <input className="form-control" {...props} />
  </div>
);

