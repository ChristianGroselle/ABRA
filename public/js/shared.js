const upvoteTarget = async (id) => {
    const response = await fetch(`/api/recipes/vote/${id}`, {
        method: "PUT",
    });
    const myJson = await response.json(); //extract JSON from the http response
    if (response.ok) {
      //alert('Recipe upvoted!');
      window.location.reload();
    } else {
      alert("Error, Please try again");
    }
}

document.addEventListener("click", function(e){
    const target = e.target.closest(".voteBtn"); // Or any other selector.
  
    if(target){
      upvoteTarget(target.dataset.id);
    }
  })