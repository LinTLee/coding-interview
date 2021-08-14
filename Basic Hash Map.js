/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.map = [];
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    var pair = this.map.find((pair) => {
      return pair.key === key;
    });

    if (pair == null) {
      this.map.push({
        key: key, value: value
      })
      return;
    }
    
    this.map.forEach((pair) => {
      if (pair.key === key) {
        pair.value = value;
      }
    })
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  var pair = this.map.find((pair) => {
    return pair.key === key;
  });
  return pair == null ? null : pair.value;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  this.map = this.map.filter((pair) => {
    return pair.key !== key;
  });
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
 var obj = new MyHashMap();
 obj.put(1,'a')
 console.log(obj.map)
console.log(obj.get(1))
 obj.remove(1)
 console.log(obj.map)
