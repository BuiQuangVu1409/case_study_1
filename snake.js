//toàn bộ code đièu khiển con rắn
class Snake {
    constructor(){
        this.vel = createVector(0,0); // tạo ra con rắn với tọa độ ban đầu
        this.head = createVector(0,0);
        this.length = 0;
        this.body = [];
        this.isDead = false;
    }
    // sẽ update lại vị trí của phần thân rắn, dựa theo biến length
    //isdead tượng trưng cho trạng thái cảu con rắn
    update(){
        this.body.push(createVector(this.head.x, this.head.y));

        this.head.x += this.vel.x * GRID_SIZE;
        this.head.y += this.vel.y * GRID_SIZE;

        this.head.x = (this.head.x + WITDH) % WITDH;
        this.head.y = (this.head.y + HEIGHT) % HEIGHT;

        if(this.length < this.body.length)
        {
            this.body.shift();
        }

        for(let vector of this.body)
        {
            if(vector.x == this.head.x && vector.y == this.head.y)
            {
                this.isDead = true;
            }
        }
    }
    // thể hiện con rắn trên màn hình show()
    show() {
        noStroke();
        // Draw snake head
        fill(255);
        rect(this.head.x, this.head.y, GRID_SIZE, GRID_SIZE);

        // Draw snake body
        fill(155);
        for(let vector of this.body)
        {
            rect(vector.x, vector.y, GRID_SIZE, GRID_SIZE);
        }
    }
}
