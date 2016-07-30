String.prototype.toAlternatingCase = function() {
  var strArr = this.split('');
  for (var i = 0; i < strArr.length; i++) {

    if (strArr[i] === strArr[i].toUpperCase()) {
      strArr[i] = strArr[i].toLowerCase();
    }
    else {
      strArr[i] = strArr[i].toUpperCase();
    }
  }
    return strArr.join('');
}

// String.prototype.toInvertedCase = function () {
//   tmp = "";
//   for (i=0; i< this.length; i++) {
//     t=this[i];
//     t=(t==t.toUpperCase()?t.toLowerCase():t.toUpperCase()); tmp+=t;
//   }
//   return tmp;
// }

toInvertedCase("Hello");