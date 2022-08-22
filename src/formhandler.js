import $ from "jquery";
export class FormHandler{
    constructor(selector){
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }
    addSubmitHandler(fn){
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', (event) => {
            event.preventDefault();
            let data = {};
            let target = event.currentTarget;
            // console.log(target);
            $(target).serializeArray().forEach((item) => {
                data[item.name] = item.value;
                console.log(item.name + ' is' + item.value);
            });
            console.log(data);
            fn(data);
            target.reset();
            target.elements[0].focus();
        });
    }
}