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
    

});

const miDiv = document.querySelector('#miDiv');
miDiv.innerHTML += "<p>Este es un párrafo agregado desde JavaScript</p>";