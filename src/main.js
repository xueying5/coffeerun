import { DataStore } from "./datastore";
import { Truck } from "./truck";

const datastore = new DataStore();
datastore.add('majunan@foxmail.com', '拿铁');
console.log(datastore.data);