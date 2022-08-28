const loadMeals = (search)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
};

const displayMeals = (meals) =>{
    // console.log(meals)
    const mealContainer = document.getElementById('meal-container')
    mealContainer.innerHTML= '';
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
             <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
             <p class="card-text">${meal.strInstructions.slice(0, 200)}...</p>
             </div>
        </div>
        `;
        mealContainer.appendChild(mealDiv)
    });
}

const searchFood =() =>{
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    loadMeals(searchText)
    searchField.value = '';
}

const loadMealDetail = (idMeal) =>{
    //  console.log('Get detail of id :', idMeal)
     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    //  console.log(url)

     fetch(url)
        .then(res => res.json())
        .then(data => displayMealsDetails(data.meals[0]))

}

const displayMealsDetails = meal => {
    console.log(meal)
    const detailsContainer = document.getElementById('detail-container');
    detailsContainer.innerHTML = '';
    const detailDiv = document.createElement('div')
    detailDiv.classList.add('card')
    detailDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
     <div class="card-body">
     <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 200)}...</p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    detailsContainer.appendChild(detailDiv)
}


loadMeals('a')