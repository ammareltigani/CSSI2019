
function generateString(){
  rand = Math.floor((Math.random() * 114));
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

  return random_words[rand];
}

function checkForBox(nodeBoxes, player_color, word){
  for ( let r = 1; r < nodeBoxes.length; r+=2){
    let letter = nodeBoxes[r].innerHTML;
    letter = "String".fontSize(30);
    if (word == letter && nodeBoxes[r].style.backgroundColor!= player_color)
    {
      return nodeBoxes[r];
    }
  }
  return false;
}

function giveMeRandIndex(nodeBoxes){
  rand_index = Math.floor((Math.random() * nodeBoxes.length/2) -1);
  rand_index = (rand_index * 2) +1
  return rand_index;
}

function changeBoxColor(color, box){
  box.style.backgroundColor = color;
  box.innerHtml = '';
}


















var x = document.getElementById("txtbox");
const grid = document.querySelector('#all_boxes');
let node_boxes_node = grid.childNodes;
let node_boxes = Array.from(node_boxes_node);

let filled_boxes = [];

function generateTiles(){
  if (node_boxes.length > 0) {
    let this_index = giveMeRandIndex(node_boxes);
    let this_box = node_boxes[this_index];
    filled_boxes.push(this_box);
    this_box.innerHTML = generateString();
    node_boxes.splice(this_index, 1);
  }
}

setInterval(generateTiles, 500);

let temp_string = "";
window.addEventListener("keydown", event =>{
  if (event.key === "Backspace"){
    temp_string = temp_string.substring(0, temp_string.length - 1);
  }
  else{
    temp_string += event.key;
    console.log(temp_string)
  }
  let found_box = checkForBox(filled_boxes, "red", temp_string.toLowerCase());
  console.log(found_box.toString());
  if(found_box != false)
  {
    changeBoxColor("blue",found_box);
    temp_string = "";
    x.value = "";
    event.preventDefault();
    return;
  }
})
