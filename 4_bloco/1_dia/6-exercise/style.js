let peca = "bispo";

switch (peca.toLowerCase()) {
    case "peao" :
        console.log("Anda somente uma casa para frente");
    break;
    case "torre":
        console.log("Anda quantas casas quiser para os lados, frente e trás");
    break;
    case "cavalo":
        console.log("Faz um movimento de L");
    break;
    case "rainha":
        console.log("Anda quantas casas quiser em todas as direções");
    break;
    case "rei":
        console.log("Anda uma casa em qualquer direção");
    break;    
    case "bispo":
        console.log("Anda quantas casas quiser na diagonal");
    break;
    default:
        console.log("Erro fatal");
}


