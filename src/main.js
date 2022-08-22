import { DataStore } from "./datastore.js";
import { Truck } from "./truck.js";
import { FormHandler } from "./formhandler.js";
import { CheckList } from "./checklist.js";
const FORM_SELECTOR = '[data-coffee-order="form"]';
const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]'

const myTruck = new Truck('007', new DataStore());
const formhandler = new FormHandler(FORM_SELECTOR);
formhandler.addSubmitHandler((data)=>{
    myTruck.createOrder(data);
    checkList.addRow(data);
});
const checkList = new CheckList(CHECKLIST_SELECTOR);
checkList.addClickHandler(myTruck.deliverOrder);