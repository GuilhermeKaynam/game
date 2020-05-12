function mostrarCarrinho() {
    var vetorCarrinho = listarItems();
    var output = ""; //string para mostrar os items
    for (var i in vetorCarrinho) {
        output += "<li>"+vetorCarrinho[i].nome+" "+vetorCarrinho[i].quantidade+"</li>";
    }
    $("#items-carrinho").html(output);//sobrescre tudo que tem nessa id
    
    }
    
    
    //mostrar-itens
    
    $(function(){
    var output = $(this);
    $("mostrar-carrinho").html(output);
    mostrarCarrinho();
    })

    object.nome = carro;
object.urlFoto =  urlImg;
//link da imagem

