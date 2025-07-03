export class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    area(){
        console.log(`The area of the rectangle is ${this.height * this.width}`);
    }
}

export class Square extends Rectangle{
    constructor(height){
        super(height, height);
        this.height = height;
    }
}