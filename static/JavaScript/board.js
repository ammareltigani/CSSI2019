const grid = document.querySelector('#all_boxes')
let node_boxes = grid.childNodes;

function changeBoxColor(color, box){
  box.style.backgroundColor = color;
  box.innerHtml = '';
}

for (let r = 1; r < node_boxes.length; r+=2){
  let this_box = node_boxes[r];
  this_box.innerHTML = generateString(node_boxes);
  let letter = this_box.innerHTML;
  this_box.addEventListener("keydown", event =>{
    if (event.key == letter)
      this_box.style.background = "black";
  })
}

function generateString(box)
{
  for ( let c = 1; c < box.length; c+=2)
  {
    ran = Math.floor((Math.random() * 25));
    if (ran == 0)
    {
      return 'A';
    }
    else if (ran == 1)
    {
      return 'B';
    }
    else if (ran == 2)
    {
      return 'C';
    }
    else if (ran == 3)
    {
      return 'D';
    }
    else if (ran == 4)
    {
      return 'E';
    }
    else if (ran == 5)
    {
      return 'F';
    }
    else if (ran == 6)
    {
      return 'G';
    }
    else if (ran == 7)
    {
      return 'H';
    }
    else if (ran == 8)
    {
      return 'I';
    }
    else if (ran == 9)
    {
      return 'J';
    }
    else if (ran == 10)
    {
      return 'K';
    }
    else if (ran == 11)
    {
      return 'L';
    }
    else if (ran == 12)
    {
      return 'M';
    }
    else if (ran == 13)
    {
      return 'N';
    }
    else if (ran == 14)
    {
      return 'O';
    }
    else if (ran == 15)
    {
      return 'P';
    }
    else if (ran == 16)
    {
      return 'Q';
    }
    else if (ran == 17)
    {
      return 'R';
    }
    else if (ran == 18)
    {
      return 'S';
    }
    else if (ran == 19)
    {
      return 'T';
    }
    else if (ran == 20)
    {
      return 'U';
    }
    else if (ran == 21)
    {
      return 'V';
    }
    else if (ran == 22)
    {
      return 'W';
    }
    else if (ran == 23)
    {
      return 'X';
    }
    else if (ran == 24)
    {
      return 'Y';
    }
    else if (ran == 25)
    {
      return 'Z';
    }
  }
}
