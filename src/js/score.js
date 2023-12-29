var time;
var countDown;

function INIT_time(){
    
    time= new Date();
}

function display(){

    // team Name
    var teamNameA= HOME.tName;
    var teamNameB= AWAY.tName;
    document.getElementsByClassName("hName")[0].innerHTML= teamNameA;
    document.getElementsByClassName("aName")[0].innerHTML= teamNameB;
    // team Point
    var teamPointA= HOME.tPoint;
    var teamPointB= AWAY.tPoint;
    document.getElementsByClassName("hPoint")[0].innerHTML= teamPointA;
    document.getElementsByClassName("aPoint")[0].innerHTML= teamPointB;

}

class Team{
    
    constructor(tName, tPoint= 0){
        
        this.tName= tName;
        this.tPoint= tPoint;
    }


    m_tName(role= "Admin"){
        
        var tName= "";
        while(tName== ""){

            var tName= window.prompt("Input the New Name:");
        }
        console.log("\""+tName+"\"");
        var now= new Date();
        console.log((now.getTime()- time.getTime())/ 1000+ "s >>> " + role + " Modify " + this.tName + " to " + tName);
        this.tName= tName;
        display();
    }
    
    m_tPoint(role= "Admin"){
        
        var tPoint= "";
        while(!Number.isInteger(tPoint) || tPoint==""){
            
            var tPoint= parseInt(window.prompt("Input the New Point"));
        }
        var now= new Date();
        console.log((now.getTime()- time.getTime())/ 1000+ "s >>> " + role + " Modify " + this.tName + "Point from "+this.tPoint + " to " + this.tPoint);
        this.tPoint= tPoint;
        display();
    }
    
    addPoint(tNumber, tAddingPoint) {
        
        var now= new Date();
        this.tPoint+= tAddingPoint;
        console.log((now.getTime()- time.getTime())/ 1000+ "s >>> " + tNumber + " Scored " + tAddingPoint);
        display();
    }
    
    minusPoint(role= "Admin", tMinusPoint){
        
        var now= new Date();
        this.tPoint-= tMinusPoint;
        console.log((now.getTime()- time.getTime())/ 1000+ "s >>> " + role + " Modify " + tMinusPoint);
        display();
    }
}

var HOME = new Team("Home", 0);
var AWAY = new Team("Away", 0);

display();
