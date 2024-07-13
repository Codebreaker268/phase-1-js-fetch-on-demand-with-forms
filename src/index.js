const init = () => {
    form=document.querySelector('form');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        const text=document.getElementById('searchByID');
       

        fetch(`http://localhost:3000/movies/${text.value}`)
        .then (function(response){
            return response.json()
        })
        .then(function(data){
            
          
            const title=document.querySelector('h4');
            const summary=document.querySelector('p');
            title.innerText=data.title;
            summary.innerText=data.summary;
        })
    })
  
}

document.addEventListener('DOMContentLoaded', init);
