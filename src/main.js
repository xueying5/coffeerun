import { DataStore } from "./datastore";
import { Truck } from "./truck";
import { FormHandler } from "./formhandler";

const FORM_SELECTOR = '[data-coffee-order="form"]';

const myTruck = new Truck('007', new DataStore());
const formhandler = new FormHandler(FORM_SELECTOR);

formhandler.addSubmitHandler(myTruck.createOrder);