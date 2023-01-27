// var num=105;
// var count=0;
// for (var i= 1; i<=num; i++) {
//      if (num%1==0) {
//         count++;
//      }
// }
// console.log(count==2? "it's a prime":"its not a prime");



function primenum(num)
{
    var count=0;
    for (var i= 1; i<=num; i++) {
         if (num%1==0) {
            count++;
         }
    }
    console.log(count==2? "it's a prime":"its not a prime");
      
}

primenum(10)


    