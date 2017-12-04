var Stack = function(size){
    this.size = size || Infinity;
    this.storage = {};
    this.count = 0;

};

Stack.prototype.push = function (value) {
    if(this.count < this.size){
        return "Capacity reached, stack cant have more items"
    }
    this.storage[this.count++] = value;
 };

Stack.prototype.pop = function () {
    if(this.count<0){
        return "Stack is already empty";
    }
  var value = this.storage[--this.count];
    delete this.storage[this.count];
    return value;
};