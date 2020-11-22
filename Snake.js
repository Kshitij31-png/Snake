class Snake{
    constructor(){
        var options={
            isStatic:false
        }

        this.body = Bodies.rectangle(200,200,20,20);
        console.log(this.body);
        // this.width = width;
        // this.height = height;
        // World.add(world,this.body);
        // this.body = [];
        // this.body[0] = createVector(500,200);
        // this.xdir = 0;
        // this.ydir = 0;
    }

    setdir(x,y){
        this.body.velocity.x=x;
        this.body.velocity.y=y;
    }

    // update() {
    //     this.body.x += this.xdir;
    //     this.body.y += this.ydir;
    // }

    eat(pos){
        // let x = this.body.x;
        // let y = this.body.y;
        if(this.body.position.x === pos.x && this.body.position.y === pos.y){
          print("FOOD EATEN");
          return true;
       }  
          return false;
      }

    display(){
        // var pos =this.body[0].posit ion;
        push();
        // translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("blue");
        rect(this.body.position.x,this.body.position.y,20,20);
        pop();
    }
    
}