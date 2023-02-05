const fs=require('fs');

let ruta='./files/fyh.txt';

let fecha=new Date().toLocaleDateString();

let hora=new Date().toLocaleTimeString();

fs.writeFile(ruta, `${fecha} - ${hora}`, (error)=>{
    if (error){
        console.log(error)
    }else{
        fs.readFile(ruta,"utf-8",(e,lectura)=>{
            if(e){
                console.log(e);
            }else{
                console.log(lectura);
            }
        });
    }
    })