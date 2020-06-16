var count = 0;

function cc(card) {

  // Only change code below this line
if(card >= 2 && card <= 6) {
   count++;
} else if(card == 10 || typeof card === 'string') {
   count--;
} else {
   count;
}
if(count < 0) {
  return console.log(count + " Hold");
} else {
  return console.log(count + " Bet");
}

  
  // Only change code above this line
}


cc(2); cc('K'); cc('K'); cc('K'); cc('A');
