let nave = {}

function addInfor(){
    nave.nome = prompt("Digite o nome da nave")
    nave.tipoNave = prompt("Digite o tipo da nave")
    nave.velocidadeMax = Number(prompt("Digite a velocidade máxima da nave")),
    nave.acelear = 0
}

function opcoesAceOuParar(){
    var opcao 
    do{
        opcao = prompt("Você deseja acelerar ou parar? \nDigite 1 para acelear. \nDigite 2 para parar")
        switch (opcao) {
            case "1":
                acelear()
                break
            case "2":
                infor()
                break
            default:
                alert("Desculpa, opção não disponível")
        } 
    
    } while (opcao != "2")
}

function acelear(){
        nave.acelear += Number(prompt("Digite a velocidade que deseja acelerar"))
        console.log(nave.acelear)     
    if(nave.acelear > nave.velocidadeMax){
        alert("Velocidade  máxima ultrapassada" + "\nVelocidade da nave: " + nave.acelear + "km/s" + "\nVelocidade máxima: " + nave.velocidadeMax + "km/s")
    }
    
}

function infor (){
    var infor = "Nome da nave: " + nave.nome
    infor += "\n Tipo de nave: " + nave.tipoNave
    infor += "\n Velocidade da nave: " + nave.acelear + " km/s"
    console.log(infor)
}

addInfor()
opcoesAceOuParar()