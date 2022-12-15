const deleteSaved = async (id) => {
    const response = await fetch(`/api/recipes/${id}`, {
        method: "DELETE",
    });
    const myJson = await response.json(); //extract JSON from the http response
    if (response.ok) {
      //alert('Recipe deleted');
      window.location.reload();
    } else {
      alert("Error, Please try again");
    }
}

const recomendSaved = async (id) => {
    const response = await fetch(`/api/recipes/share/${id}`, {
        method: "PUT",
    });
    const myJson = await response.json(); //extract JSON from the http response
    if (response.ok) {
      alert('Recipe Shared!');
      //window.location.reload();
    } else {
      alert("Error, Please try again");
    }
}

const removeShared = async (id) => {
    const response = await fetch(`/api/recipes/hide/${id}`, {
        method: "PUT",
    });
    const myJson = await response.json(); //extract JSON from the http response
    if (response.ok) {
      alert('Recipe Un-Shared.');
      window.location.reload();
    } else {
      alert("Error, Please try again");
    }
}

document.addEventListener("click", function(e){
    const target = e.target.closest(".delBtn"); // Or any other selector.
  
    if(target){
      deleteSaved(target.dataset.id);
    }
  })

  document.addEventListener("click", function(e){
    const target = e.target.closest(".recBtn"); // Or any other selector.
  
    if(target){
      recomendSaved(target.dataset.id);
    }
  })

  document.addEventListener("click", function(e){
    const target = e.target.closest(".unRecBtn"); // Or any other selector.
  
    if(target){
      removeShared(target.dataset.id);
    }
  })