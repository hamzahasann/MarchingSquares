const WIDTH=1000,HEIGHT=800;
const ROWS=80,COLS=100;
const SIDE=WIDTH/COLS;
const xrange=COLS/2,yrange=ROWS/2;
function eval(x,y){
    x=x/SIDE-xrange;
    y=ROWS-y/SIDE-yrange
    return (x*x/49+y*y/100-1)>0;
}

function setup(){
    createCanvas(WIDTH,HEIGHT);
}
function draw(){
    background(0);
    stroke(255);
    for(var i=0;i<COLS;i++){
        line(SIDE*i,0,SIDE*i,HEIGHT);
    }for(var j=0;j<ROWS;j++){
        line(0,SIDE*j,WIDTH,SIDE*j);
    }for(var i=0;i<COLS;i++){
        for(var j=0;j<ROWS;j++){
            var x1,y1,x2,y2;
            x1=i*SIDE;
            y1=j*SIDE;
            x2=x1+SIDE;
            y2=y1+SIDE;
            var p=8*eval(x1,y1)+4*eval(x2,y1)+2*eval(x2,y2)+eval(x1,y2);
            stroke(255,0,0);
            strokeWeight(10);
            switch(p){
                case 0:
                    break;
                case 1:
                    line(x1,(y1+y2)/2,(x1+x2)/2,y2);
                    break;
                case 2:
                    line((x1+x2)/2,y2,x2,(y1+y2)/2);
                    break;
                case 3:
                    line(x1,(y1+y2)/2,x2,(y1+y2)/2);
                    break;
                case 4:
                    line((x1+x2)/2,y1,x2,(y1+y2)/2);
                    break;
                case 5:
                    line(x1,(y1+y2)/2,(x1+x2)/2,y1);
                    line((x1+x2)/2,y2,x2,(y1+y2)/2);
                    break;
                case 6:
                    line((x1+x2)/2,y1,(x1+x2)/2,y2);
                    break;
                case 7:
                    line(x1,(y1+y2)/2,(x1+x2)/2,y1);
                    break;
                case 8:
                    line(x1,(y1+y2)/2,(x1+x2)/2,y1);
                    break;
                case 9:
                    line((x1+x2)/2,y1,(x1+x2)/2,y2);
                    break;
                case 10:
                    line(x1,(y1+y2)/2,(x1+x2)/2,y2);
                    line((x1+x2)/2,y1,x2,(y1+y2)/2);
                    break;
                case 11:
                    line((x1+x2)/2,y1,x2,(y1+y2)/2);
                    break;
                case 12:
                    line(x1,(y1+y2)/2,x2,(y1+y2)/2);
                    break;
                case 13:
                    line((x1+x2)/2,y2,x2,(y1+y2)/2);
                    break;
                case 14:
                    line(x1,(y1+y2)/2,(x1+x2)/2,y2);
                    break;
                case 15:
                    break;
            }strokeWeight(1);
        }
    }
}
