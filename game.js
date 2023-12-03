// chứa toàn bộ code game
let snake, food;

function setup() {
    createCanvas(WITDH, HEIGHT);
    newGame();
}
//hàm draw() đc chỉnh lại để mỗi khi trạng thái isdead == true thì sẽ tạo 1 game mới
function draw() {
    background(0);
    if(!snake.isDead){
        drawSnake();
    } else {
        newGame()
    }
}
// cập nhật lại vị trí
function drawSnake() {
    // update every SNAKE_SPEED frame
    if(frameCount % SNAKE_SPEED == 0)
    {
        snake.update();
    }
    //
    // textSize(15);
    // text("Score: " + snake.length, 0, 15);
    food.show();
    snake.show();

    // xử lý khi rắn ăn thức ăn
    if(snake.head.x == food.x && snake.head.y == food.y){
        eatFood();
    }
}

function newGame() {
    snake = new Snake();
    food = new Food();
}
//khi ăn xong thức ăn thêm chiều dài của rắn lên 1

function eatFood() {
    snake.length++;
    food.newFood();
}
//vel(x,y) hướng đi
// x.trái y.lên
// y+= xử lý chuyển động
function keyPressed() {
    if (keyCode == UP_ARROW && snake.vel.y != 1) {
        snake.vel.y = -1;
        snake.vel.x = 0;
    } else if (keyCode == DOWN_ARROW && snake.vel.y != -1) {
        snake.vel.y = 1;
        snake.vel.x = 0;
    }  else if (keyCode == LEFT_ARROW && snake.vel.x != 1) {
        snake.vel.y = 0;
        snake.vel.x = -1;
    } else if (keyCode == RIGHT_ARROW && snake.vel.x != -1) {
        snake.vel.y = 0;
        snake.vel.x = 1;
    }
}