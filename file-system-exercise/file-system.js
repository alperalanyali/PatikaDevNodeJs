const fs = require("fs");
let data;
const readFile =  ()=>{
    var file = fs.readFile("employees.json",'utf-8',(err,res)=>{
        if(err){
            console.log("Error: "+err)
        }
        data = res;
        console.log(res);
    })
}


const updateFile=  ()=>{
    const newData = `{"name": "Employee 1 Name", "salary": 1230} `
fs.writeFile("employees.json",newData,(err,res)=>{
    if(err)
        console.log(err);
    console.log(res);
})
readFile();
}

const removeFile =()=>{
    fs.unlink('employees.json',(err,res)=>{
            
        if(err) 
            console.log(err);
        console.log(res);
            
    });
}
removeFile();