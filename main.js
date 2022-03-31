const array =['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd'];
 const most = 1;
 const count = {};
 const least = 1;
 const maxCount = 0;
 const minCount = 0;
 
 for (var i=0; i<array.length; i++) {
  for (var j=i; j<array.length; j++) {
    if (array[i] == array[j])
      count++;
    if (most<count) {
      most=count; 
      maxCount = array[i];
}
    if (array[i] != array[j])
    count--;
    if (most>count) {
    least=count; 
    minCount = array[i];
}
}
    count = 0;
  
   
}
