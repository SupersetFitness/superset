// import React from 'react';
// import ReactDOM from 'react-dom';
// import EditableLabel from 'react-inline-edit';
 
// class Edit extends React.Component {
//     constructor(props){
//       super(props);
 
//       this._handleFocus = this._handleFocus.bind(this);
//       this._handleFocusOut = this._handleFocusOut.bind(this);
//     }
 
//     _handleFocus(text) {
//         console.log('Focused with text: ' + text);
//     }
 
//     _handleFocusOut(text) {
//         console.log('Left editor with text: ' + text);
//     }
 
//     render() {
//         return <div>
//             <EditableLabel text='Hello!'
//                 labelClassName='myLabelClass'
//                 inputClassName='myInputClass'
//                 inputWidth='200px'
//                 inputHeight='25px'
//                 inputMaxLength='50'
//                 labelFontWeight='bold'
//                 inputFontWeight='bold'
//                 onFocus={this._handleFocus}
//                 onFocusOut={this._handleFocusOut}
//             />
//         </div>
//     }
// }
 
// ReactDOM.render(
//   <Edit />,
//   document.getElementById('container')
// );