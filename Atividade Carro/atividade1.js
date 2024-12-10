var carro = {
    "marca" : "Mercedes",
    "modelo" : "C404",
    "placa" : "PLG6H95",
    "ano" : 2005,
    "cor" : "Prata",
    "portas" : 4,
    "ligado" : false,
    "nivelCombustivel" : 100,
    "tanque" : 5,
    "combustivelAtual" : 5,
    "ligarCarro" : function(){
        if(!this.ligado) {
            this.ligado = true;
            console.log("Carro Ligado!");
        } else{
            console.log("O carro já está ligado!");
        }
    },
    "desligarCarro" : function(){
        if (this.ligado) {
            this.ligado = false;
            console.log("Carro desligado.");
        } else {
            console.log("O carro já está desligado.");
        }
    },
    "abastecerCarro" : function(v){
        if (v > 0) {
            let novoCombustivel = this.combustivelAtual + v;
            if (novoCombustivel <= this.tanque) {
                this.combustivelAtual = novoCombustivel;
                console.log("Carro abastecido. Combustível atual: " + this.combustivelAtual + " litros.");
            } else {
                this.combustivelAtual = this.tanque;
                console.log("Tanque cheio. Combustível atual: " + this.combustivelAtual + " litros.");
            }
        } else {
            console.log("Quantidade inválida para abastecimento.");
        }
    },
    "andarCarro" : function(v){
        if (this.ligado && this.combustivelAtual > 0) {
            let consumo = v * 0.1; // Consome 0.1 litro por km
            if (this.combustivelAtual >= consumo) {
                this.combustivelAtual -= consumo;
                console.log("Carro andando por " + v + " km.");
                console.log("Combustível restante: " + this.combustivelAtual + " litros.");
            } else {
                console.log("Não há combustível suficiente para andar essa distância.");
            }
        } else if (!this.ligado) {
            console.log("O carro está desligado. Ligue o carro para andar.");
        } else {
            console.log("Não há combustível suficiente para andar.");
        }
    },
    "verNivelCombustivel" : function(){
        console.log("Combustível no tanque: " + this.combustivelAtual + " litros.");
    },
    "getDados" : function(){
        return " A marca " + this.marca + "referente ao" + this.modelo + " com a placa " + this.placa + " do ano de " + this.ano + " e cor " + this.cor + " e " + this.portas + " portas "
    }
}

// Testando as funções
carro.ligarCarro();
carro.andarCarro(30);  // Tentando andar 30 km
carro.abastecerCarro(3); // Abastecendo 3 litros
carro.verNivelCombustivel();
carro.getDados();
carro.desligarCarro();