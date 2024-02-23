function calculer_prix(){

    var dis=document.getElementById('nemberr').value;

    var prix;


    

    if(document.getElementById("Normal").checked==true)  {
          if(dis<=10){
            prix=50
          }

          else{
            
                prix=70
              
          }

    }

    else{
        if(dis<=10){
            prix=80
          }

          else{
            if($dis=>10){
                prix=100
              }
          }
    }

    document.getElementById("prix").innerHTML=prix;

}


function clear_input(){
    document.getElementById("nemberr").value = "";
    document.getElementById("prix").innerHTML="0";


}