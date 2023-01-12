fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
.then(req=>req.json())
.then(data=>viewData(data.meals));

const contentView=document.getElementById('contentView');
const viewData=foodb=>{
foodb.forEach(foodb=>{
   // console.log("food Name",foodb.strMeal,"Photo Name:",foodb.strMealThumb);
    const newDiv=document.createElement('div');
    newDiv.className='foodName';
    newDiv.innerHTML=`<h1>${"Food Name is",foodb.strMeal}</h1>
    <img src="${foodb.strMealThumb}">
    `;
    contentView.appendChild(newDiv);
    // console.log(category.strMeal); 
    
});}

const searchResult=data=>{
    const input=document.getElementById('input').value;
    //const url=`www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;
    fetch(url)
    .then(req=>req.json())
    .then(data=>clickData(data.meals[0]))
}

const clickData=data=>{
    //console.log(data);
    
    const newDiv=document.createElement('div');
    newDiv.className='foodName';
    newDiv.innerHTML=`<h1>${"Food Name is",data.strMeal}</h1>
    <img src="${data.strMealThumb}">
    `;
    console.log(data.strMealThumb);

    searchContent.appendChild(newDiv);
}