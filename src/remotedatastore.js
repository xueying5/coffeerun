import $ from "jquery";
export class RemoteDataStore{
    constructor(url){
        if (!url) {
            throw new Error('No remote URL supplied');
        }
        this.serveUrl = url;
    }
    add(key, val){
        $.post(this.serveUrl, val, (serverResponse) => {
            console.log(serverResponse);
        });
    }
    getAll(cb){
        $.get(this.serveUrl, (serverResponse) => {
            console.log(serverResponse);
            cb(serverResponse);
        });
    }
    get(key, cb){
        $.get(this.serveUrl + '/' + key, (serverResponse) => {
            console.log(serverResponse);
            cb(serverResponse);
        })
    }
    remove(key){
        $.ajax(this.serveUrl + '/' + key, {
            type: 'DELETE'
        });
    }
}