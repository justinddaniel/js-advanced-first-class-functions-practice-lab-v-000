// Code your solution in this file!
function logDriverNames (array) {
  array.forEach(function (element) {console.log(element.name);});
}

function logDriversByHometown (array, string) {
  array.forEach(function (element) {element.hometown === string ? console.log(element.name) : console.log('no match'); });
}

function driversByRevenue (array) {
  let newarray = [];
  array.forEach(function (element) { newarray.push(element);});
  const revenueSorter = function (element1, element2) {
  return element1.revenue - element2.revenue; };
  return newarray.sort(revenueSorter);
}

function driversByName (array) {
  let newarray = [];
  array.forEach(function (element) { newarray.push(element);});
  const namesSorter = function (element1, element2) {
    return element1.name.localeCompare(element2.name);};
  return newarray.sort(namesSorter);
}
