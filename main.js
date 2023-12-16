document.write("2.array clone"+"<br>");
function test2(arr)
{
    return arr.slice(0);
}
document.write("[1,2,3,4] = "+test2([1,2,3,4])+"<br>");
document.write("[1,2,[3,4]] = "+test2([1,2,[3,4]])+"<br><br>");
console.log(test2([1,2,3,4]));
console.log(test2([1,2,[3,4]]));