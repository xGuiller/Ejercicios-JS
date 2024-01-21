  const borrar = document.querySelectorAll(".fn-remove-me");

  
  borrar.forEach(element => {
    element.parentNode.removeChild(element)
  });