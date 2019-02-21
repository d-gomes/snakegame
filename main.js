// Posições da cobra 
px=py=10;
gs=tc=20;
ax=ay=15;

// Direção que os botões referenciam
xv=yv=0;

// Rastro da cobra
trail=[];

// Calda da cobra
// ela começa com o tamanho 5 ( quadrados )
tail=5;

// função que desenha o jogo em si
function game() {
    // iguala os valores dos botões com a posição da cobra
    px+=xv;
    py+=yv;
    
    if( px < 0 ) {
        px = tc - 1;
    }

    if( px > tc-1 ){
        px = 0;
    }

    if( py < 0 ){
        py = tc - 1;
    }

    if(  py > tc-1 ){
        py = 0;
    }

    // Desenha o "Tabuleiro
    ctx.fillStyle = "black";
    ctx.fillRect( 0, 0, canv.width, canv.height );
    
    // Desenha a cobra
    ctx.fillStyle = "lime";

    // fica redesenhando a cobra
    for( var i = 0; i < trail.length; i++ ) {
        ctx.fillRect( trail[i].x * gs, trail[i].y * gs , gs - 2, gs - 2);

        // Caso a cobra toque em alguma parte dela, reinicia o jogo
        if( trail[i].x == px && trail[i].y == py ) {
            tail = 5;
        }
    }

    // desenha a comida 
    ctx.fillStyle = "red";
    ctx.fillRect( ax * gs, ay * gs , gs - 2, gs - 2);

    trail.push({ x: px, y: py });
    
    while( trail.length > tail ) {
        trail.shift();
    }

    // quando come a comida cresce o rabo da cobra e muda a comida de lugar
    if( ax == px && ay == py ) {
        tail++;
        ax = Math.floor( Math.random() * tc );
        ay = Math.floor( Math.random() * tc );
    }

}

// Função que pega o click dos botões 
function keyPush(evt){
    switch(evt.keyCode) {
        case 37:
            xv = -1; yv = 0;
            break;
        case 38:
            xv = 0; yv = -1;
            break;
        case 39:
            xv = 1; yv = 0;
            break;
        case 40:
            xv = 0; yv = 1;
            break;
    }
}