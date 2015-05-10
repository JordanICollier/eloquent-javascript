function range(first, last, increment){
  if (increment === null) increment = 1;
  var arr = [];

  if (increment > 0){
    for (var i = first; i <= last ;i += increment) {
      arr.push(i);
    }
  } else {
    for (var a = first; a >= last ;a +=  increment) {
      arr.push(a);
    }
 return arr;
  }


  while (first <= last) {
   arr.push(first);
    first++;
  }
  return arr;
}





function sum(input) {
  var total = 0;
  for (var i = 0; i < input.length; i++) {
     total += input[i] ;
  }
  return console.log(total);
}

var x = [1,2,3,4,5,6,7,8,9,10];

 console.log(range(5, 2, -1));
sum(x);
