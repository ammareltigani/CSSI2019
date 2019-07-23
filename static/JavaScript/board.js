const grid = document.querySelector('#all_boxes')
let node_boxes = grid.childNodes;

function changeBoxColor(color, box){
  box.style.backgroundColor = color;
  box.innerHtml = '';
}

for (let r = 1; r < node_boxes.length; r+=2){
  let this_box = node_boxes[r];
  this_box.addEventListener("click", () =>{
    changeBoxColor(this_player_color, this_box);
  })
}

// function generateString(box){
// Math.floor((Math.random() * 26));
// }
