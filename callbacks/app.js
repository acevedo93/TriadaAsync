//La triada asincrónica: Callbacks, promises, EM6 async-await
//callback es una función que recibe otra función como un parámetro

// Callbacks

function cafeTrad() {
   
  function atenderCliente(servirElCafe) {
    console.log("estoy hirviendo el agua...");
    console.log("Estoy agregando el cafe");
    console.log("Estoy poniendo la taza");
    servirElCafe();
  }

  atenderCliente(function () {
    console.log("Acá está tu tinto, querido!");
  });
}



// ClienteArrow

const cafeArrow = () => {    

  const cliente = (tomarElCafe) => {
    console.log("Estoy recibiendo el tinto");
    console.log("Lo estoy probando");
    console.log("No está tan bueno");
    tomarElCafe();
  };
  cliente(() => {console.log("Creo que quiero otro, T_T") });

};

//Si yo quiero ejecutar una query después que una ya se ejecutó con éxito, ¿dónde iría? 

function conexionDb(hell) {
    const query = "SELECT * FROM USERS"; //ó cualquier otra

    function hacerQuery(query, ejecutarFuncionExterna) {
        console.log('Ejectuo una query ' + query)
        console.log('Supuestamente proceso cosas')
        console.log('Tomo tiempo en la DB')
        // console.log('hay un error la tabla users no existe ')
        const error = false;
        if(error) {
            ejecutarFuncionExterna(error) 
        } else {
            ejecutarFuncionExterna()
        }                      
    }

    hacerQuery(query, function(error){ //función externa
        if(error) {
            console.log('la query no fue ejecutada con exito')
        } else {
            console.log('La query fue ejecutada con éxito')
            cafeTrad()
            hacerQuery(query, cafeArrow)
            hell()
        }                          
    });
}

conexionDb(function(){console.log("hell")});


// Promises

//async/await
