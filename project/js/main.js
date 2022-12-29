window.addEventListener('load',function(){//Incializa apenas após carregar toda a pagina

    
    let lasttime = 0;
    var game = null;
    const canvas = document.getElementById('main_canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    function loopGame(timeStamp){
        const deltaTime = timeStamp - lasttime;
        lasttime = timeStamp;  

        ctx.clearRect(0,0,canvas.width,canvas.height);

        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(loopGame);
    }
 

    function main(){
        //Inicializando o canvas onde será renderizado(mostrado) o game 
        game = new Game(canvas.width,canvas.height);
        loopGame(0);
    }

    main();
});