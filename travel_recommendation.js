let jsonData ;
fetch("travel_recommendation_api.json").then((response) => 
{return response.json()}).then(data => {jsonData = data;});


const search_btn = document.getElementById("search_btn");
search_btn.addEventListener("click", function(){
    const search = document.getElementById("search");
    searchByText(search.value);
});

const clear_btn = document.getElementById("clear_btn");
clear_btn.addEventListener("click", function(){
    const search = document.getElementById("search");
    search.value = "";
});

function searchByText(value){
    const converted = value.toLowerCase();
    let updated ;
    switch(converted){
        case "beach" :
            updated = "beaches";
            break;
        case "temple" :
            updated = "temples";
            break;
        case "country" :
            updated = "countries";
            break;
        default : 
            updated = converted;
            break;
    }
    if(jsonData[updated]){
        for(key in jsonData[updated]){
            console.log(jsonData[updated][key]);
        }
    }else{

    }
}