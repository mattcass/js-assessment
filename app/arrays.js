exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var index = arr.indexOf(item);
    return index;
  },

  sum: function(arr) {
    var sum = arr.reduce(function(accumulator, currentValue) {
      return accumulator  + currentValue;
    });
    return sum;
  },

  remove: function(arr, item) {
    function notMatched(value) {
      return value != item
    }

    var arr = arr.filter(notMatched);
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
      for (var i = arr.length; i--;) {
        if ( arr[i] === item ) arr.splice(i, 1);
      }
      return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;

  },

  truncate: function(arr) {
    arr.pop();
    return arr;

  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;

  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    var arr3 = arr1.concat(arr2);
    return arr3;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for ( var i = 0; i < arr.length; i++) {
      if ( arr[i] === item ) count++;
    }
    return count;

  },

  duplicates: function(arr) {
    console.log(arr);

  },

  square: function(arr) {
    var arr = arr.map(function(x) {
      return x * x;
    })
    return arr;
  },

  findAllOccurrences: function(arr, target) {

  }
};
