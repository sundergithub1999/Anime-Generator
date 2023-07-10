const btnEle=document.getElementById("btn");
const animeContainer=document.querySelector(".anime-container");
const animeImage=document.querySelector(".anime-img")
const animeName=document.querySelector(".anime-name")


// button.addEventListener("click",function);

btnEle.addEventListener("click", async function(){
    try {

        btnEle.disabled=true;
        btnEle.innerHTML="Loading....";
        animeName.innerHTML="Updating....";
        animeImage.src="spinner.svg";

        const response=await fetch("https://api.catboys.com/img");
        // so to fetch an api we need it to covert to json
        const data=await  response.json();

        btnEle.disabled=false;
        btnEle.innerHTML="Get Anime"

        animeContainer.style.display="block";
        animeImage.src=data.url;
        animeName.innerText=data.artist;
    } catch (error) {
        animeContainer.innerText="Error occured. Try again...";
        animeContainer.style.margin="15px"; 
    }
});