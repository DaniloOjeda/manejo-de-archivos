const objetos = [
    {
        manzanas:5,
        peras:9,
        carne:2,
        jugos:5,
        dulces:4,
    
    },
    
    {
        naranjas:5,
        ginda:9,
        limon:2,
        rucula:5,
        pan:4,
    
    }
    ]
    
    
    let newArray = [];
    let totalVentas=0; 
    
    
    objetos.forEach(objeto=>{
        let valores=Object.keys(objeto);
       // `console.log(valores);` //
        valores.forEach(producto=>{
           if( !newArray.includes(producto)){
            newArray.push(producto)
           }
    })
    });
    
    objetos.forEach(objeto=>{
        let valores=Object.values(objeto);
         valores.forEach(ventas=>{
         totalVentas+=ventas;
    })
    });
    
    console.log(newArray);
    console.log(totalVentas); 
    
    
    
    
    // `keys : objeto
    // values: valor numero`