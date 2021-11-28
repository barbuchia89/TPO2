function validate(){
    var name = document.getElementById("nombre").value;
    var subject = document.getElementById("asunto").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("mensaje").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 3){
      text = "Por favor ingrese un nombre válido";  
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 4){
      text = "Por favor ingrese un asunto correcto";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Por favor ingrese un email válido";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 60){
      text = "Por favor ingrese más de 20 caracteres en su mensaje";
      error_message.innerHTML = text;
      return false;
    }
    alert("Formulario enviado con exito!");
    return true;
  }