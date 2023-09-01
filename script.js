const search= document.getElementById("search"),
submit= document.getElementById("submit"),
mealsEl=document.getElementById("meals"),
resultHeading=document.getElementById("result-heading"),
singleMealsEl=document.getElementById("single-meal");

function searchMeal(e){
    event.preventDefault();
    singleMealsEl.innerHTML="";
    const term = search.value;
    console.log(term)

    if(term.trim()){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            resultHeading.innerHTML=`<h2>Displaying Results for '${term}':</h2>`;

            if(data.meals===null){
              alert("There is no result for your search")
            }else{
                mealsEl.innerHTML= data.meals.map(meals =>` 
                <div class="meal">
                <img src="${meals.strMealThumb}" alt="${meals.strMeal}"/>
                <div class="meal-info" data-mealID="${meals.idMeal}">
                <h3>${meals.strMeal}</h3>
                </div>
                </div>
                `)
                .join("")
            }
        });
        search.value="";
    }else{
        alert("Please enter a keyword or meal name")
    }

}

function getMealById(mealID){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(res=>res.json())
    .then(data=>{
        const meal=data.meals[0];

        addMealToDOM(meal);
    });
}

function addMealToDOM(meal){
    const ingredients=[];

    for (let i=1; i<=20; i++){
        if(meal[`strIngredient${i}`]){
            ingredients.push(`${meal[`strIngredient${i}`]}- ${meal[`strMeasure${i}`]}`);
        }else{
            break;
        }
    }

    singleMealsEl.innerHTML=`
    <div class="single-meal">
    <button type='button' class='close' onclick='$(this).parent().remove();'>×</button>
    <h1>${meal.strMeal}</h1>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
    <div class="single-meal-info">
    ${meal.strCategory ? `<h3>${meal.strCategory}</h3>` : ""}
    ${meal.strArea ? `<h3>${meal.strArea}</h3>` : ""}
    </div>
    <div class="main">
    <h2>Preparations</h2>
    <p>${meal.strInstructions}</p>
    <h2>Ingredients</h2>
    <ul>
        ${ingredients.map(ing=>`<li>${ing}</li>`).join("")}
    </ul>
    </div>
    </div>
    `;
}

submit.addEventListener("submit", searchMeal);

mealsEl.addEventListener("click", e=>{
    const mealInfo= e.path.find(item=> {
        if(item.classList){
            return item.classList.contains("meal-info");
        }else{
            return false;
        }
    })
    
    if(mealInfo){
        const mealID=mealInfo.getAttribute("data-mealid");
        getMealById(mealID)
    }
});

$(document).ready(function(){
    $("button#submit").click(function(){
        $("#carouselExampleCaptions").toggle();
    })
});








