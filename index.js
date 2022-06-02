let nave = {}

function addInfor(){
    nave.nome = prompt("Digite o nome da nave")
    nave.tipoNave = prompt("Digite o tipo da nave")
    nave.velocidadeMax = Number(prompt("Digite a velocidade máxima da nave")),
    nave.acelerar = 0
}

function menu(){
    var opcao 
    do{
        opcao = prompt("Você deseja acelerar ou parar? \nDigite 1 para acelear. \nDigite 2 para parar")
        switch (opcao) {
            case "1":
                acelerar()
                break
            case "2":
                infor()
                break
            default:
                alert("Desculpa, opção não disponível")
        } 
    
    } while (opcao != "2")
}

function acelerar(){
        nave.acelerar += Number(prompt("Digite a velocidade que deseja acelerar"))
        console.log(nave.acelerar)     
    if(nave.acelerar > nave.velocidadeMax){
        alert("Velocidade  máxima ultrapassada" + "\nVelocidade da nave: " + nave.acelerar + "km/s" + "\nVelocidade máxima: " + nave.velocidadeMax + "km/s")
    }
    
}

function infor (){
    var infor = "Nome da nave: " + nave.nome
    infor += "\n Tipo de nave: " + nave.tipoNave
    infor += "\n Velocidade da nave: " + nave.acelerar + " km/s"
    console.log(infor)
}

addInfor()
menu()