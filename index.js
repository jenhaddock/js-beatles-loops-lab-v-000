function theBeatlesPlay(musicians, instruments){
  var array = [];
  var i;
  let counter = musicians.length;
  for (i = 0; i < counter; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;  
}

function johnLennonFacts(array){
  let counter = array.length;
  let i = 0;
  while (i < counter){
    array[i] = `${array[i]}!!!`
    i++;
  }
  return array;
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    number++;
    array.push('I love the Beatles!')
  } while(number < 15);
  return array;
}