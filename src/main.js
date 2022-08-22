import { DataStore } from "./datastore.js";
import { Truck } from "./truck.js";
import { FormHandler } from "./formhandler.js";
import { CheckList } from "./checklist.js";
import Validation from "./validation";
import { RemoteDataStore } from "./remotedatastore";
const FORM_SELECTOR = '[data-coffee-order="form"]';
const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]'
const SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
const remote = new RemoteDataStore(SERVER_URL);
const myTruck = new Truck('007', remote);
const formhandler = new FormHandler(FORM_SELECTOR);
formhandler.addSubmitHandler((data)=>{
    myTruck.createOrder(data);
    checkList.addRow(data);
});
formhandler.addInputHandler(Validation.isCompanyEmail);
const checkList = new CheckList(CHECKLIST_SELECTOR);
checkList.addClickHandler((data)=>{
    myTruck.deliverOrder(data);
});