deepEquals = function(a, b){
if ((a instanceof Array) && (b instanceof Array)) {
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; i++) {
    if (!deepEquals(a[i],b[i])) return false;
  }
  return true;
}
if ((a instanceof Object) && (b instanceof Object)) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  for (var key in a) {
    if (!deepEquals(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
return a === b;

};
var a = { b: { c: { d: { e: 'potato' } } }, foo: 1 };
var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
 console.log(deepEquals(a,b));
