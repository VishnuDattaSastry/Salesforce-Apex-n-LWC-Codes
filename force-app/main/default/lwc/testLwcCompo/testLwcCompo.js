import { LightningElement } from 'lwc';

export default class TestLwcCompo extends LightningElement {

    abc = 10
    test (){
        return abc * 11
    }
    abc = this.test 
}