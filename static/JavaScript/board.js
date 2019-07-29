//                  ||Some functions that we will use in the gamer-runner code further below||              //
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
                  'weigh',"trust","insurance","caption","skin","curved","judicious",'describe',"hallowed","contain",
                  "rigid","instrument",  "sincere", "bottle", "actually", "sea", "spotted", "calm", "tall", "buzz",
                  "rabbit", "flock", "jumpy", "scene", "weak","thin", "rural", "cemetery", "odd", "pain", "banana",
                  "robin", "suit", "super", "zoo", "bash", "egg", "future", "kiss", "ocean", "savory", "handle", "club",
                  "party", "infamous", "glorious", "tasteful", "succinct", "experience", "lush"]
  rand = Math.floor((Math.random() * random_words.length));
  return random_words[rand];
} //return random word from a list

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
} //check for string validity in array of boxes

function giveMeRandIndex(nodeBoxes){
  rand_index = Math.floor((Math.random() * nodeBoxes.length));
  return rand_index;
}//returns a random index in the list of boxes

function changeBoxColor(color, box){
  box.style.backgroundColor = color;
  box.innerHtml = '';
}//changes the color of a box to the user's color

function changeURL(to) {
       var theURL = window.location.pathname;
       window.location.href = theURL.replace("game", to);
}//redirects to the leaderboard page when:
                          //(1) timer runs out
                          //(2) all boxes have been filled a color



//                                               ||Game runner||                                          //


//Creating the array of boxes
const grid = document.querySelector('#all_boxes');
let node_boxes_node = grid.childNodes;
let node_boxes = [];
for(let i = 1; i < node_boxes_node.length; i +=2){
  node_boxes.push(node_boxes_node[i]);
}

//Size of node_boxes
let original_length = node_boxes.length;

//Number of colored all_boxes
let num_colored_boxes = 0;

//getting the textbox, timebox, and botbox elements
var time_box = document.getElementById("timebox");
var bot_box = document.getElementById("botbox");
var player_box = document.getElementById("playerbox");
var text_box = document.getElementById("txtbox");
var bot_color = "purple";

//Timer variables
let min = 1;
let sec = 0;
let is_done = false;
let counter = setInterval(timer, 1000);
//Timer function
function timer(){
  if (sec > 9){
    time_box.innerHTML = min + ":" + sec;
    sec-=1;
  }
  else if (sec <= 9){
    time_box.innerHTML = min + ":0" + sec;
    if (sec == 0 && min !== 0){
      min -= 1;
      sec = 59;
    }
    else if (sec == 0 && min == 0){
      is_done = true;
      clearInterval();
      time_box.innerHTML = "EXPIRED";
      changeURL("leaderboard?score=0");
    }
    else{
      sec -=1;
      return;
    }
  }
}

//Creating an array for the boxes that have been populated
let filled_boxes = [];
//Generates tiles with intervals
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

//Event listener to get user input string and calls checkForBox and changeBoxColor
let temp_string = "";
let player_box_count = 0;
window.addEventListener("keydown", event =>{
  if (event.key === "Backspace"){
    temp_string = temp_string.substring(0, temp_string.length - 1);
  }
  else if(event.key === "Enter"){
    temp_string = "";
    text_box.value = "";
    text_box.innerHTML = "";
  }
  else{
    temp_string += event.key;
  }
  text_box.innerHTML = temp_string;
  let found_box = checkForBox(filled_boxes, color, temp_string.toLowerCase());
  if(found_box && found_box.style.backgroundColor != bot_color)
  {
    changeBoxColor(color,found_box);
    player_box_count++;
    player_box.innerHTML = "Your Points: " + player_box_count;
    num_colored_boxes++;
    temp_string = "";
    text_box.value = "";
    text_box.innerHTML = ">" + temp_string;
    event.preventDefault();
  }
})

let bot_box_count = 0;
let botChanger = setInterval(goBot, 2000);

function goBot(){
  let r = giveMeRandIndex(filled_boxes);
  if (filled_boxes[r].style.backgroundColor != color && filled_boxes[r].style.backgroundColor != "purple"){
    changeBoxColor(bot_color, filled_boxes[r]);
    num_colored_boxes++;
    bot_box_count++;
    bot_box.innerHTML = "Opponent: " + bot_box_count;
  }
}

let endgame = setInterval(allTilesClaimed, 500);
function allTilesClaimed(){
  if(num_colored_boxes == original_length)
  {
    let score = (player_box_count * 8) + (parseInt(time_box.innerHTML, 10) * 5);
    console.log("Score: "+score);
    changeURL("leaderboard?score=" + score);
  }
}
