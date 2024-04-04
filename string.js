let string = "The Quick Brown Fox";

// tHE qUICK bROWN fOX
function swapCase(string){
  word = string.split(' ');
    return  word.map( i =>  {
    return  i[0].toLowerCase() + (i.slice(1)).toUpperCase()
    }).join(" ");
}
console.log(swapCase(string))
