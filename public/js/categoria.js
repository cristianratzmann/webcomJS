function eliminarCategoria(idForm, destino){
            
            confirma = confirm("Deseja eliminar esta categoria?");
            
            if(confirma){
            
           dadosForm = $('#'+idForm).serialize();
            
        $.ajax({
            
        method: 'post',
        url: destino,
        data: dadosForm,
        dataType: 'html',
        success: function(data){
            //Ação de sucesso
            if(data == 'true'){
                //$('#linha'+idForm).remove();
                $('#linha'+idForm).fadeOut(1000);
            }else {
                alert('Não foi possível eliminar a categoria!');
            }
        },
        error: function (argument){
            alert('Erro ao elmininar categoria!');
            
        }
            });
        }
        
            return false;
            
        }
        
        var estado = false;
        
        function mostrarEsconderTitulo(){
           $('#titulo').slideToggle(1000);   
  
        }


function adicionarCategoria(destino){
    
    mostrarStatus 
    
    dadosForm = $('#formAdd').serialize();
    nomcat = $('#nomcat').val();
    $('#nomcat').focus();
    if(nomcat.trim() != ""){
            
        $.ajax({
            
        method: 'post',
        url: destino,
        data: dadosForm,
        dataType: 'html',
        success: function(data){
            if(data == "true"){
                $('#mostrarStatus').fadeIn(1000);
                  
            $('#nomcat').val('');
            $('#nomcat').focus();
            }else {
                alert('Falha ao adicionar categoria!');
            }

},
        error: function (argument){
            alert('Erro ao adicionar categoria!');
            
        }
            });
            
        }else{
            alert("Preencha todos os campos!");
        }
                
    return false;
}