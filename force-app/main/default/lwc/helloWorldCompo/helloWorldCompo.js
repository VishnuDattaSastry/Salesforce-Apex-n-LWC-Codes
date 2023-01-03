import { LightningElement, track } from 'lwc';

export default class HelloWorldCompo extends LightningElement {
    // data binding example
    fullname = "Telangana "
    title= "Formed in the year 2014"

    change (event) {
            this.title = event.target.value 
    }
    // @track example: 
     @track address = {
        city: "Hyderabad",
        postcode: 500062,
        country: "India"
    }
    trackHandler (event) {   
        this.address.postcode = event.target.value
        // do the same thing with spread operator:
        // this.address= {...this.address, "city" : event.target.value}

    }
    // Getter Example:
    // Print first name of the array on the screen. 
    users = ["john", "Vishnu", "Smith"]
    num1 = 10
    num2 = 20
 
    get firstUser() { 
        return this.users[1].toUpperCase() 
    }
get multiply() {
    return this.num1 * this.num2
}

}