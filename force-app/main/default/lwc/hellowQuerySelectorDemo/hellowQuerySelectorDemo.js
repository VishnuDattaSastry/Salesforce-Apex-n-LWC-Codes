import { LightningElement } from 'lwc';

export default class HellowQuerySelectorDemo extends LightningElement {
    userNames=["John", "Nik", "Mike", "Smith"]
    fetchDetailHandler(){   
        const elem = this.template.querySelector('h1')
        elem.style.border='1px solid red';
        console.log(elem.innerText) 
        
        const userElements = this.template.querySelectorAll('.name') 
            Array.from(userElements).forEach(item => { 
            console.log(item.innerText)
            item.setAttribute("title", item.innerText) // on hovering text to appear
        })
        // LWC:DOM = "Manual" --- Demo
        const childElem = this.template.querySelector('.child')
        childElem.innerHTML= '<p> hey this is child element </p>'
    }
}