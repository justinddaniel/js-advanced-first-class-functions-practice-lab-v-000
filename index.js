// Code your solution in this file!
function logDriverNames (array) {
  array.forEach(function (element) {console.log(element.name);});
}

function logDriversByHometown (array, string) {
  array.forEach(function (element) {element.hometown === string ? console.log(element.hometown) : console.log('no match'); });
}