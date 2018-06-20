
import React from "react";

const TextArea = props => (
  <div className="form-group">
    <textarea className="form-control" rows="20" {...props} />
  </div>
);

const Input = props => (
  <div className="form-group">
    <input className="form-control" {...props} />
  </div>
);

const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    {props.children}
  </button>
);


export {
  TextArea,
  Input,
  FormBtn
};