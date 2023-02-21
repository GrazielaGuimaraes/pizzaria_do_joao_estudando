
class Pizza {

    constructor(massa, borda, sabor, imagem) {

        this.massa = massa
        this.borda = borda;
        this.sabor = sabor
        this.imagem = imagem
        
    }
}

class Pedido {

    constructor(massa, borda, sabor, imagem, status, tempo_entrega, forma_pagamento) {

        this.massa = massa
        this.borda = borda;
        this.sabor = sabor
        this.imagem = imagem
        this.status = status
        this.tempo_entrega = tempo_entrega
        this.forma_pagamento = forma_pagamento
    }
}


 let confirmar_pedido = document.getElementById('finalizar-pedido')

 confirmar_pedido.addEventListener('click', () => {


    if(document.getElementById('select-massa').value != '' && 
    document.getElementById('select-borda').value != '' &&
    document.getElementById('select-sabor').value != '' &&
    document.getElementById('select-bebida').value != '' &&
    document.getElementById('forma-pagamento').value != '') {

        let massa = document.getElementById('select-massa').value

        switch(massa){

            case '1':
            massa = 'Pizza nova-iorquina'
            break

            case '2':
            massa = 'Pizza siciliana'
            break

            case '3':
            massa = 'Pizza napolitana'
            break
        }





        let borda = document.getElementById('select-borda').value

        switch(borda){

            case '1':
            borda = 'Sem recheio'
            break

            case '2':
            borda = 'Catupiry'
            break

            case '3':
            borda = 'Cheddar'
            break

            case '4':
            borda = 'Chocolate'
            break
        }


        let imagem = ''


        let sabor = document.getElementById('select-sabor').value

        switch(sabor){

            case '1':
            sabor = 'Calabresa'
            imagem = 'calabresa.png'
            break

            case '2':
            sabor = 'Quatro queijos'
            imagem = 'quatro_queijos.png'
            break

            case '3':
            sabor = 'Portuguesa'
            imagem = 'portuguesa.png'
            break
        }


        let bebida = document.getElementById('select-bebida').value



        switch(bebida) {

            case '1':
            bebida = 'Coca-Cola'
            break

            case '2':
            bebida = 'Fanta Uva'
            break

            case '3':
            bebida = 'Pureza'
            break
        }




        let forma_pagamento = document.getElementById('forma-pagamento').value

        switch(forma_pagamento) {

            case '1':
            forma_pagamento = 'Dinheiro (Pagamento na entrega)'
            break

            case '2':
            forma_pagamento = 'Pix'
            break

            case '3':
            forma_pagamento = 'Cartão (Pagamento na entrega)'
            break
        }
       


       
        
        /*Objeto pizza*/
        let pizza = new Pizza(massa, borda, sabor, imagem)

        document.getElementById('foto-pizza').style.height = 'auto'
        document.getElementById('foto-pizza').style.width = '100%'
        document.getElementById('foto-pizza').src = pizza.imagem
        document.getElementById('sabor-pizza').innerHTML = `Sabor: ${pizza.sabor}`
        document.getElementById('massa-pizza').innerHTML = `Massa: ${pizza.massa}`
        document.getElementById('borda-pizza').innerHTML = `Borda: ${pizza.borda}`

        document.getElementById('entrega-pagamento').innerHTML = `Pagamento: ${forma_pagamento}`

        //document.getElementById('status-whatsapp').style.href = ''
        limparCampos()
    } 

       else  {

        
        alert('Preencha os campos')

       }
   






 })


 function limparCampos() {

    document.getElementById('select-massa').value = ''
    document.getElementById('select-sabor').value = ''
    document.getElementById('select-borda').value = ''
    document.getElementById('select-bebida').value = ''
    document.getElementById('forma-pagamento').value = ''

    
 }