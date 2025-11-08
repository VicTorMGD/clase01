const message = "Hello, World!";

document.querySelector('#header').innerHTML+= message;

console.log(message);

const btnChangeColor = document.querySelector('#btn-change-color')

const colors=['red','blue','green','pink','purple','brown','#fff','#000'];
let count =0;

btnChangeColor.addEventListener('click', () => {
    if(count >= colors.length){
        count=0;
    }
    document.body.style.backgroundColor = colors[count];
    count++;

    //ocultar y mostrar el titulo
    const title = document.querySelector('#header');
    
    // if(title.style.display == 'none'){
    //     title.style.display = 'block';
    // }else{
    //     title.style.display = 'none';
    // }
    if(title.hasAttribute('hidden')){
        title.removeAttribute('hidden');
        
    }else{
        title.setAttribute('hidden',null);
    }
    console.log('paso');
    
    const x = numero % 2 === 0;


});

const miDiv = document.querySelector('#miDiv');
miDiv.innerHTML += "<p>Este es un párrafo agregado desde JavaScript</p>";



if((valor > 10) && (valor % 2 == 0)){
    console.log ("Valor valido",valor);
    } else {
        console.log ("Valor no valido",valor);
    }

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

numeros.forEach((ele) =>{
    console.log(ele);
});


let valor = prompt("Ingresa un número:");
