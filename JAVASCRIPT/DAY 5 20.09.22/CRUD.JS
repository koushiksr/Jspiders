var car ={
     "brand name" : "BMW",
     color : "white",
     price : 1000000,
     millage : 10,
     a:true,
     b:undefined,
     c:NaN,
     d:[10,20,30],
     e:{e1:1,e2:2},
     fueltype:"diesel",
     drive :()=>{
          console.log("start");
     }
}
console.log(car.color);
car.drive();



car.color= "black"
car["brand name"]="volve"


car.fueltype='petrol'
delete car.a;
delete car.b;
delete car.c;
delete car.d;
