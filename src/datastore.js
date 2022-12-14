export class DataStore{
    constructor(){
        this.data = {};
    }
    add(key, value){
        this.data[key] = value;
    }
    get(key){
        return this.data[key];
    }
    getAll(){
        return this.data;
    }
    remove(key){
        delete this.data[key];
    }
}
// export default DataStore;