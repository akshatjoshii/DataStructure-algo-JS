var Queue = function (size) {
    this.size = size || Infinity;
    this.head = 0;
    this.tail = 0;
    this.storage = {};
    
};

Queue.prototype.enqueue = function (value) {
    if(this.tail<this.size){
        this.storage[this.tail++] = value;
    }
};

Queue.prototype.dequeue = function () {
    if(this.head<this.tail){
        var value = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return value;
    }else{
        return "Queue is empty";
    }


};