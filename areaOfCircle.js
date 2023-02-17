
let arguments = process.argv.slice(2);

function calculateArea(radius){
    console.log(`Area of circle: ${Math.PI * Math.pow(radius, 2)}` )
}

calculateArea(parseFloat(arguments[0]));