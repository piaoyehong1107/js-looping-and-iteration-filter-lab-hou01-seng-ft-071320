// Code your solution in this file
function findMatching(drivers,string){
<<<<<<< HEAD
  return drivers.filter(function(driver){return driver.toLowerCase()===string.toLowerCase();});
}
function fuzzyMatch(drivers,string){
  return drivers.filter(function(driver){return driver.indexOf(string)===0;});
}
function matchName(drivers,string){
  return drivers.filter(function(driver){return driver.name===string;});
=======
  const matches;
  matches=drivers.filter(function(driver){return driver===string})
  return matches
>>>>>>> b8bac0f52d27c672995c1bf0c5701ba603618ede
}