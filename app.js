
function reset() {
    document.getElementById('miForm').reset();
  }
/*                      ###   SUMA   ###                     */

  const botonsuma = document.getElementById ("submit-s");
  botonsuma.addEventListener('click', async (event)=>{
    event.preventDefault();
      const numero1 = parseFloat(document.getElementById('numero1').value);
      const numero2 = parseFloat(document.getElementById('numero2').value);
      const respuesta = await fetch('http://localhost:3001/api/sumar', {
     
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({numero1, numero2}),
      
    }); 

    const dato = await respuesta.json();
    const div_resultado = document.getElementById("resultado").
    innerHTML = numero1 + numero2;
  }
  );
 
 /*                    ####   RESTA    ####                      */

  const botonresta = document.getElementById ("submit-r");
  botonresta.addEventListener('click', async (event)=>{
    event.preventDefault();
      const numero1 = parseFloat(document.getElementById('numero1').value);
      const numero2 = parseFloat(document.getElementById('numero2').value);
      const respuesta = await fetch('http://localhost:3001/api/restar', {
     
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({numero1, numero2}),
      
    }); 

    const dato = await respuesta.json();
    const div_resultado = document.getElementById("resultado").
    innerHTML = numero1 - numero2;
  }
  );
/*                   ####   MULTIPLICACION   ###                 */

const botonmultiplicar = document.getElementById ("submit-m");
  botonmultiplicar.addEventListener('click', async (event)=>{
    event.preventDefault();
      const numero1 = parseFloat(document.getElementById('numero1').value);
      const numero2 = parseFloat(document.getElementById('numero2').value);
      const respuesta = await fetch('http://localhost:3001/api/multiplicar', {
     
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({numero1, numero2}),
      
    }); 

    const dato = await respuesta.json();
    const div_resultado = document.getElementById("resultado").
    innerHTML = numero1 * numero2;
  }
  );

/*                 #####    DIVIDIR   ##################  */


const botondividir = document.getElementById ("submit-d");
  botondividir.addEventListener('click', async (event)=>{
    event.preventDefault();
      const numero1 = parseFloat(document.getElementById('numero1').value);
      const numero2 = parseFloat(document.getElementById('numero2').value);
      const respuesta = await fetch('http://localhost:3001/api/dividir', {
     
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({numero1, numero2}),
      
    }); 

    const dato = await respuesta.json();
    const div_resultado = document.getElementById("resultado").
    innerHTML = numero1 / numero2;
  }
  )