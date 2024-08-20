// Collection Functions

function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    collection.forEach((value, index) => callback(value, index, collection));
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key], key, collection);
      }
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const result = [];
  myEach(collection, (value, key, coll) => {
    result.push(callback(value, key, coll));
  });
  return result;
}

function myReduce(collection, callback, acc) {
  let startIdx = 0;
  if (acc === undefined) {
    acc = collection[0];
    startIdx = 1;
  }

  myEach(collection, (value, key, coll) => {
    if (Array.isArray(coll) && key >= startIdx || !Array.isArray(coll) && key !== 'length') {
      acc = callback(acc, value, coll);
    }
  });
  return acc;
}

function myFind(collection, predicate) {
  let found;
  myEach(collection, (value, key, coll) => {
    if (predicate(value, key, coll)) {
      found = value;
      return; // Exit loop early
    }
  });
  return found;
}

function myFilter(collection, predicate) {
  const result = [];
  myEach(collection, (value, key, coll) => {
    if (predicate(value, key, coll)) {
      result.push(value);
    }
  });
  return result;
}

function mySize(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// Array Functions

function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  }
  return array.slice(0, n);
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  }
  return array.slice(-n);
}

// Object Functions

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}