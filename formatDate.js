function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  var newUserDate = userDate.split('/');
  //console.log(newUserDate);
  if (newUserDate[0].length == 1) {
    newUserDate[0] = '0'+ newUserDate[0];
  }
  if (newUserDate[1].length == 1) {
    newUserDate[1] = '0' + newUserDate[1]
  }
  var formattedDate = newUserDate[2]+newUserDate[0]+newUserDate[1];
  // console.log(formattedDate);
  return formattedDate

}

console.log(formatDate("12/1/2014"));