let containerDiv = document.createElement('div');
document.body.appendChild(containerDiv);
containerDiv.className='container';

const width = 100;
const height = width;

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
            e.target.style.backgroundColor = 'green';
        });
    }
}



