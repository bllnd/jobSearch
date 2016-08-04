function getRealFloor(n) {
  if (n === 1 || n === 0) {
    return 0;
  }
  else if (n === 15) {
    return 13;
  }
  else if (n < 15 && n >= 0) {
    return n-1;
  }
  else if (n === 13) {
    return null;
  }
  else if (n < 0 ) {
    return n;
  }
  else {
    return n-2;
  }
}

 console.log(getRealFloor(13));