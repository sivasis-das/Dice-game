let randomNumber1 = Math.ceil(Math.random()*6);
console.log(randomNumber1);

let randomNumber2 = Math.ceil(Math.random()*6);
console.log(randomNumber2);

function player1(){
    if(randomNumber1==1){
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png")
    }else if(randomNumber1==2){
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png")
    }else if(randomNumber1==3){
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png")
    }else if(randomNumber1==4){
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png")
    }else if(randomNumber1==5){
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png")
    }else{
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png")
    }
    player2();
}


function player2(){
    if(randomNumber2==1){
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png")
    }else if(randomNumber2==2){
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png")
    }else if(randomNumber2==3){
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png")
    }else if(randomNumber2==4){
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png")
    }else if(randomNumber2==5){
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png")
    }else{
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png")
    }
    
}




    if(randomNumber1==randomNumber2){
        document.querySelector("h1").textContent="Draw!";
    }else if(randomNumber1>randomNumber2){
        document.querySelector("h1").textContent="Player 1 wins!";
    }else{
        document.querySelector("h1").textContent="Player 2 wins!";
    }
