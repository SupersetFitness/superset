import React, { Component } from 'react';
import paypal from "paypal-checkout"

 export default class PayPal extends Component {

    componentDidMount() {
        this.renderButton()
        console.log(paypal)
    }

 // Render the PayPal button

 renderButton = () => paypal.Button.render({

    // Set your environment

    env: 'sandbox', // sandbox | production

    // Specify the style of the button

    style: {
        layout: 'vertical',  // horizontal | vertical
        size:   'medium',    // medium | large | responsive
        shape:  'rect',      // pill | rect
        color:  'gold'       // gold | blue | silver | black
    },

    // Specify allowed and disallowed funding sources
    //
    // Options:
    // - paypal.FUNDING.CARD
    // - paypal.FUNDING.CREDIT
    // - paypal.FUNDING.ELV

    funding: {
        allowed: [ paypal.FUNDING.CARD, paypal.FUNDING.CREDIT ],
        disallowed: [ ]
    },

    // PayPal Client IDs - replace with your own
    // Create a PayPal app: https://developer.paypal.com/developer/applications/create

    client: {
        sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
        production: '<insert production client id>'
    },

    payment: function(data, actions) {
        return actions.payment.create({
            payment: {
                transactions: [
                    {
                        amount: { total: '0.01', currency: 'USD' }
                    }
                ]
            }
        });
    },

    onAuthorize: function(data, actions) {
        return actions.payment.execute().then(function() {
            window.alert('Payment Complete!');
        });
    }

}, '#paypal-button-container')

render() {
    return (
        <div id='#paypal-button-container'></div>
    )
}
 }
