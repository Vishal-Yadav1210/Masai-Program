function area(height,base){
    if(height<0 || base<0)console.log("Invalid number, base and height must be positive numbers.")
    else console.log(`The area of the triangle is: ${(height*base)/2}`)
  }
  area(5,10)
  area(0,15)
  area(8,0)
  area(8,-1)