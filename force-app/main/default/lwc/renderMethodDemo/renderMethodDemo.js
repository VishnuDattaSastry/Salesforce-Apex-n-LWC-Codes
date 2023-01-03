import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signUpTemplate from './signUpTemplate.html'
import renderMethodDemo from './renderMethodDemo.html'
export default class RenderMethodDemo extends LightningElement {
    selectedBtn = ''
    render () {   // We should not give any custom name here.  
        //using turnary operator for IF like condition. 
        return this.selectedBtn === 'Signup' ? signUpTemplate:  
                this.selectedBtn === 'Signin' ? signinTemplate:
                renderMethodDemo

    }
    handleClick(event) {
        this.selectedBtn = event.target.label
    }
    submitHandler(event) {
        console.log(`${event.target.label}  Sign in Successfully!!`)
    }
}