let width = 50;
let height = width;

let button = document.createElement('button');
button.textContent = 'Set Size';
document.body.appendChild(button);

button.addEventListener('click', function(e) {
    do {
        width = parseInt(prompt("Choose a size 1-100"));
        console.log(width)
    } while ((!Number.isInteger(width)) || width<1 || width>100);

    width = Math.min(width, 100);

    height = width;
    initialize(width, height);
})

function initialize(width, height){
    containerDiv.innerHTML = '';
    documentWidth = document.body.clientWidth;
    cellSize = documentWidth/width;
    
    console.log("Cell Size: " + cellSize);
    
    for(h=0; h<height; h++){
        let rowDiv = document.createElement('div');
        rowDiv.className = 'row';
        rowDiv.textContet = 'r';
        containerDiv.appendChild(rowDiv);
        for(w=0; w<width; w++){
            let colDiv = document.createElement('div');
            colDiv.className = 'cell'
            colDiv.style.height = cellSize+'px';
            colDiv.style.width = cellSize+'px';
            rowDiv.appendChild(colDiv);
            colDiv.addEventListener("mouseenter", function(e){ 
                console.log('over');            
                e.target.style.backgroundColor = 'skyblue';
            });
        }
    }
}

// container to hold the etch-a-sketch
let containerDiv = document.createElement('div');
document.body.appendChild(containerDiv);
containerDiv.className='container';

initialize(width, height);









