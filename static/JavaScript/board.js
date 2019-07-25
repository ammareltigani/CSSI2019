function generateString(){
  random_words = ["humorous","star","touch","minister","river","brown","horse","parcel","murmur","choose",
                  "notice","swot","care","shop","quick","smell","possessive","faulty",
                  "station","bit", "kiwi", "cup","pan","type","obnoxious","abounding", "crave", "jeans", "city", "work",
                  "ceaseless", "correspond", "seat", "superficial", "steadfast", "paint", "pacify", "snakes",
                  "mighty", "wombat", "elegant", "sneeze", "cap", "police", "fowl", "lead", "idea", "flowery", "huge",
                  "stove", "wrench", "aloof", "gash", "birthday", "goofy", "river", "dye", "jar", "hit", "stage",
                  "leather", "admire", "squirrel", "snake", "dress", "scarf", "power", "brawny", "close", "walk",
                  "sweat", "dive", "rings", "beast", "spongebob", "oven", "push", "quit", "back", "body", "third",
                  "fretful", "avoid", "woozy", "bow", "owe", "bumpy", "resonant", "grip", "glass", "instrument",
                  "value", "daffy", "hug", "sob", "pushy", "organic", "lawyer", "shoe", "like", "prohibit", "science",
                  "winter", "hockey", "koala", "surfing", "zeal", "organic", "melodrama", "on", "mountain", "rugby",
                  "hour", "sane", "scorpion", "rap", "surprise", "cool", "tower", "midway", "ledge", "gate", "funny",
                  "roasted", "mass", "imminent", "robin", "song", "sweat", "upbeat", "toys", "view", "put", "trap",
                  "include", "half", "train", "smooth", "handle", "rustic", "direful","foolish","woozy","whistle",
                  "time","guard","malicious","wool","breath","creator","spot","juicy","boast","recess","respect",
                  "hobbies","used","trick","frog","hug","gainful","nail","rub","kiss","include","whole",
                  "green","snails","test","tail","great","bless","encourage","grandiose","exotic","jail","confused",
                  'weigh',"trust","insurance","caption","skin","curved","judicious",'describe',"hallowed","contain"]
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

function changeURL(to) {
       var theURL = window.location.pathname;
       window.location.href = theURL.replace("game", to);
}




































var text_box = document.getElementById("txtbox");
const grid = document.querySelector('#all_boxes');
let node_boxes_node = grid.childNodes;
var time_box = document.getElementById("timebox");
var bot_box = document.getElementById("botbox");

let min = 1;
let sec = 0;
let is_done = false;
let counter = setInterval(timer, 1000);


function timer()
{
  if (sec > 9)
  {
    time_box.innerHTML = min + ":" + sec;
    sec-=1;
  }
  else if (sec <= 9)
  {
    time_box.innerHTML = min + ":0" + sec;
    if (sec == 0 && min !== 0)
    {

      min -= 1;
      sec = 59;
    }
    else if (sec == 0 && min == 0)
    {
      is_done = true;
      clearInterval();
      time_box.innerHTML = "EXPIRED";
      changeURL("");
    }
    else
    {
      sec -=1;
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

interval = setInterval(generateTiles, 1500);

let temp_string = "";
window.addEventListener("keydown", event =>{
  if (event.key === "Backspace"){
    temp_string = temp_string.substring(0, temp_string.length - 1);
  }
  else if(event.key === "Enter"){
    temp_string += "";
  }
  else{
    temp_string += event.key;
  }
  text_box.innerHTML = temp_string;
  let found_box = checkForBox(filled_boxes, color, temp_string.toLowerCase());
  if(found_box)
  {
    changeBoxColor(color,found_box);
    temp_string = "";
    text_box.value = "";
    text_box.innerHTML = ">" + temp_string;
    event.preventDefault();
  }
})



//bot timeeee

let tempbot_string = "";
let counterr = setInterval(botClicker, 2000);
let bot_color = "purple";
var bot_box_count = 0;

function botClicker()
{
  let thisIndex = giveMeRandIndex(node_boxes);
  let wordd = node_boxes[thisIndex];
  let fondBox = checkForBox(node_boxes, bot_color, temp_string.toLowerCase());
  if (fondBox)
  {
    changeBoxColor(bot_color,wordd);
    temp_string = "";
    bot_box_count++;
    bot_box.innerHTML = "Opponent's box count: " + bot_box_count;
  }
  else
  {
    tempbot_string += wordd;
  }
}
