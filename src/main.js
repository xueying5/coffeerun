import { DataStore } from "./datastore";
import { Truck } from "./truck";
import { FormHandler } from "./formhandler";
import { CheckList } from "./checklist";
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