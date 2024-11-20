const cardbydata=(info)=>{
    let card = document.createElement("div");
    card.classList = "card-container";
    card.innerHTML = `
    
    <div class="card-main">
        <h3 class="card-h3">${info.title}</h3>
        <img src="images/icon-plus.svg" class="card-img">
</div>
        <p class="p-card"> ${info.description}</p>

    `;
    let btn = card.querySelector(".card-h3");
    // console.log(btn);
    let pcard = card.querySelector(".p-card");
    let img = card.querySelector(".card-img");
    btn.addEventListener("click",(e)=>{
        // console.log(pcard.style.display);
        if(pcard.style.display == "none" || pcard.style.display == "") {
            pcard.style.display = "block";
            img.src = "images/icon-minus.svg";
        }else{
            pcard.style.display = "none";
            img.src = "images/icon-plus.svg";
        }
    });

    img.addEventListener("click",(e)=>{
        // console.log(pcard.style.display);
        if(pcard.style.display == "none" || pcard.style.display == "") {
            pcard.style.display = "block";
            img.src = "images/icon-minus.svg";
        }else{
            pcard.style.display = "none";
            img.src = "images/icon-plus.svg";
        }
    });

    return card;
}

function loadcards(){

    let container = document.querySelector(".cards-container");

    for(i=0;i<data.length;i++){
        container.appendChild(cardbydata(data[i]));
    }

}

loadcards();