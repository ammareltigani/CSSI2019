
function generateString(box){
  rand = Math.floor((Math.random() * 90));
  random_words = ["humorous","star","touch","minister","river","brown","horse","parcel","murmur","choose",
                  "notice","swot","care","shop","quick","smell","possessive","faulty","disagreeable",
                  "station","bit","cup","pan","type","obnoxious","abounding", "crave", "jeans", "work",
                  "ceaseless", "correspond", "seat", "superficial", "steadfast", "paint", "pacify", "snakes",
                  "mighty", "elegant", "sneeze", "cap", "police", "fowl", "lead", "idea", "flowery", "huge",
                  "stove", "wrench", "aloof", "gash", "birthday", "goofy", "river", "dye", "jar", "hit", "stage",
                  "leather", "admire", "squirrel", "snake", "dress", "scarf", "power", "brawny", "close", "walk",
                  "sweat", "dive", "rings", "beast", "spongebob", "oven", "push", "quit", "back", "body", "third",
                  "fretful", "avoid", "woozy", "bow", "owe", "bumpy", "resonant", "grip", "glass", "instrument",
                  "value", "daffy"]

  return word = random_words[rand];
}

function checkForBox(nodeBoxes, player_color, word){
  for ( let r = 1; r < nodeBoxes.length; r+=2){
    let letter = nodeBoxes[r].innerHTML;
    if (word == letter && nodeBoxes[r].style.backgroundColor!= player_color)
    {
      return nodeBoxes[r];
    }
  }
  return false;
}

function changeBoxColor(color, box){
  box.style.backgroundColor = color;
  box.innerHtml = '';
}








const grid = document.querySelector('#all_boxes')
let node_boxes = grid.childNodes;

for (let r = 1; r < node_boxes.length; r+=2){
  let this_box = node_boxes[r];
  this_box.innerHTML = generateString(node_boxes);
}

let temp_string = "";

window.addEventListener("keydown", event =>{
  if (event.key === "Backspace"){
    temp_string = temp_string.substring(0, temp_string.length - 1);
  }
  else{
    temp_string += event.key;
    console.log(temp_string)
  }
  let found_box = checkForBox(node_boxes, "blue", temp_string.toLowerCase());
  console.log(found_box.toString());
  if(found_box != false){
    changeBoxColor("blue",found_box);
    temp_string = "";
    return;
  }
})
