export class Truck{
    constructor(truckId, db){
        this.truckId = truckId;
        thid.db = db;
    }
    createOrder(order){
        console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress, order);
    }
    deliverOrder(customerId){
        console.log('Delivering order for ' + customerId);
        this.db.remove(customerId);
    }
    printOrders(){
        let customerIdArray = Object.keys(this.db.getAl());
        console.log('Truck #' + this.truckId + ' has pending orders:');
        customerIdArray.forEach((id)  => {
            console.log(this.db.get(id));
        });
    }
}
// export default Truck;