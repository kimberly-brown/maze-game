function rand(max) {

}

// shuffle the array a
function shuffle(a) {
  // hint: Math.random()
  // swap some elements randomly
}

//
function changeBrightness(factor, sprite) {
  //
}

// display message "You moved " + <moves> + " steps"
function displayVictoryMess(moves) {

}

// for element designated by 'id', set style.visibility to hidden or visible
function toggleVisability(id) {

}

function Maze(Width, Height) {
  var mazeMap;
  var width = Width;
  var height = Height;
  var startCoord, endCoord;
  var dirs = ["n", "s", "e", "w"];
  // TODO: ...
  var modDir = {
    n : {
      y: -1,
      x: 0,
      o: "s"
    },
    s: {

    },
    e: {

    },
    w: {

    }
  };

  this.map = function() {
    return mazeMap;
  };
  this.startCoord = function() {

  };
  this.endCoord = function() {

  };

  function genMap() {
    mazeMap = ...; // create 2D array
    // set directions of each cell to false

  }

  function defineMaze() {

  }

  function defineStartEnd() {
    // switch statement on rand(4)
    // pick random start and end coorinates:
    // x is 0 or width-1
    // y is 0 or height-1
    //
    // ex.)
    //
    // startCoord = {
    //  x: 0,
    //  y: 0
    // }
  }
}

function DrawMaze(Maze, ctx, cellsize, endSprite = null) {
  function drawCell(xCord, yCord, cell) {

  }

  function drawMap() {

  }

  function drawEndFlag() {

  }

  function drawEndSprite() {

  }

  function clear() {

  }
}

function Player(maze, c, _cellsize, onComplete, spirte = null) {
  function drawSpriteCircle(coord) {

  }

  function drawSpriteImg(coord) {

  }

  function removeSprite(coord) {

  }

  function check(e) {

  }

  this.bindKeyDown = function() {

  };

  this.unbindKeyDown = function() {

  };

  drawSprite(maze.startCoord());
  this.bindKeyDown();
}

function makeMaze() {

}
