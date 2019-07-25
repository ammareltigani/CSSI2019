function generateString(){
  random_words = ["humorous","star","touch","minister","river","brown","horse","parcel","murmur","choose",
                  "notice","swot","care","shop","quick","smell","possessive","faulty","disagreeable",
                  "station","bit", "kiwi", "cup","pan","type","obnoxious","abounding", "crave", "jeans", "city", "work",
                  "ceaseless", "correspond", "seat", "superficial", "steadfast", "paint", "pacify", "snakes",
                  "mighty", "wombat", "elegant", "sneeze", "cap", "police", "fowl", "lead", "idea", "flowery", "huge",
                  "stove", "wrench", "aloof", "gash", "birthday", "goofy", "river", "dye", "jar", "hit", "stage",
                  "leather", "admire", "squirrel", "snake", "dress", "scarf", "power", "brawny", "close", "walk",
                  "sweat", "dive", "rings", "beast", "spongebob", "oven", "push", "quit", "back", "body", "third",
                  "fretful", "avoid", "woozy", "bow", "owe", "bumpy", "resonant", "grip", "glass", "instrument",
                  "value", "daffy", "hug", "sob", "pushy", "organic", "lawyer", "shoe", "like", "prohibit", "hour",
                  "roasted", "mass", "imminent", "robin", "song", "sweat", "upbeat", "toys", "view", "put", "trap",
                  "include", "half", "train", "smooth"]
  rand = Math.floor((Math.random() * random_words.length));
  return random_words[rand];
}


function checkForBox(nodeBoxes, player_color, word){
  for ( let r = 0; r < nodeBoxes.length; r++){
    let letter = nodeBoxes[r].innerHTML;
    if (word == letter && nodeBoxes[r].style.backgroundColor!= player_color)
    {
      let box = nodeBoxes[r]
      nodeBoxes.splice(r, 1);
      return box;
    }
  }
  return false;
}

function giveMeRandIndex(nodeBoxes){
  rand_index = Math.floor((Math.random() * nodeBoxes.length));
  return rand_index;
}

function changeBoxColor(color, box){
  box.style.backgroundColor = color;
  box.innerHtml = '';
}


















var x = document.getElementById("txtbox");
const grid = document.querySelector('#all_boxes');
let node_boxes_node = grid.childNodes;
var y = document.getElementById("timebox");

let counter =setInterval(timer(1,0), 1000);

function timer(min, sec)
{
  if (sec > 9)
  {
    y.innerHTML = min + ":" + sec;
    sec-=1;
    return;
  }
  else if (sec < 10)
  {
    y.innerHTML = min + ":0" + sec;
    if (sec == 0 && min !== 0)
    {

      min -= 1;
      sec += 59;
      return;
    }
    else if (sec == 0 && min == 0)
    {
       clearInterval(counter);
       y.innerHTML = "Expired";
       return;
    }
  }
}


let node_boxes = [];
for(let i = 1; i < node_boxes_node.length; i +=2){
  node_boxes.push(node_boxes_node[i]);
}

let filled_boxes = [];
let interval;
function generateTiles(){
  if (node_boxes.length > 0){
    let this_index = giveMeRandIndex(node_boxes);
    let this_box = node_boxes[this_index];
    filled_boxes.push(this_box);
    this_box.innerHTML = generateString();
    node_boxes.splice(this_index, 1);
  }
  else{
    clearInterval(interval);
  }
}

interval = setInterval(generateTiles, 1000);

let temp_string = "";
window.addEventListener("keydown", event =>{
  if (event.key === "Backspace"){
    temp_string = temp_string.substring(0, temp_string.length - 1);
  }
  else{
    temp_string += event.key;
  }
  let found_box = checkForBox(filled_boxes, color, temp_string.toLowerCase());
  if(found_box != false)
  {
    changeBoxColor(color,found_box);
    temp_string = "";
    x.value = "";
    event.preventDefault();
    return;
  }
})
