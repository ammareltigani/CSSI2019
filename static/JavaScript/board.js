const grid = document.querySelector('#all_boxes')
let node_boxes = grid.childNodes;

function changeBoxColor(color, box){
  box.style.backgroundColor = color;
  box.innerHtml = '';
}

window.addEventListener("keydown", event =>{
  for ( let r = 1; r < node_boxes.length; r+=2)
  {
    let letter = node_boxes[r].innerHTML;
    if (event.key == letter && node_boxes[r].style.backgroundColor!= "black")
    {
      changeBoxColor("black", node_boxes[r]);
      break;
    }
  }
})

for (let r = 1; r < node_boxes.length; r+=2){
  let this_box = node_boxes[r];
  this_box.innerHTML = generateString(node_boxes);
}

function generateString(box){
  rand = Math.floor((Math.random() * 25));
  random_words = ["humorous","star","touch","minister","river","brown","horse","parcel","murmur","choose","notice",
                  "swot","care","shop","quick","smell","possessive","faulty","disagreeable","station","bit","cup",
                  "pan","type","obnoxious"]
  return random_words[rand];
}
