import $ from "jquery";
import { Row } from "./row";
export class CheckList{
    constructor(selector){
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }
    addClickHandler(fn){
        this.$element.on('click', 'input', (event) => {
            let email = event.target.value;
            this.removeRow(email);
            fn(email);
        })
    }
    addRow(coffeeOrder){
        this.removeRow(coffeeOrder.emailAddress);
        let rowElement = new Row(coffeeOrder);
        this.$element.append(rowElement.$element);
    }
    removeRow(email){
        this.$element.find('[value="' + email + '"]')
        .closest('[data-coffee-order="checkbox"]')
        .remove();
    }
}