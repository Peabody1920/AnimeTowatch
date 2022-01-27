let search = document.getElementById("search");

search.addEventListener("input", show)

function show(element){

    let inputVal = search.value
    let cardBody = document.getElementsByClassName("card")
    

    Array.from(cardBody).forEach(function(element){
       
        let cardTxt = element.getElementsByTagName("h6")[0].innerText;
        
        
        
        if (cardTxt.includes(inputVal)){
            element.style.display = "block"
        }
        else{
            element.style.display = "none"
            
        }
    })
        

}