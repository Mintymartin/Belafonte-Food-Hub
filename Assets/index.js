"use strict";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
fetch(url)
    .then(res => (res.json()))
    .then(data => {
        // To get each item loop through the array
        console.log(data)
        let html = ""
        data.meals.map((value) => {
            html += `
            <div class="col-md-4">

            <div class="card" style="width:370px">
            <h2 id="tee">${value.strArea}</h2>
            <p>${value.strTags}</p>
                <img class="card-img-top" src="${value.strMealThumb}" alt="Card image" style="width:100%">
                <div class="card-body">
                    <h4 class="card-title text-success">${value.strMeal}</h4>
                <div class="major">
                    <div><a href="${value.strYoutube}" class="btn btn-outline-success">Watch Video</a></div>

                    </div>
                    
                </div>
                <div class="all"> 
                    
                <div class="lke"> 
                    <button id="likebtn">
                    <i class="fa fa-thumbs-up"></i>
                    </button>
                     <input type="number" id="input1" value="0" name=""></input>
                </div>

                <div class="dis">
                <button id="dislikebtn">
                    <i class="fa fa-thumbs-down"></i>
                </button>
                <input type="number" id="input2" value="0" name=""></input>
                    </div>
                    </div>       
                    </div>
            </div>
            
        </div>`
        })
        document.getElementById("content").innerHTML = html;

        //Like button
        let likebtn = document.querySelector('#likebtn');
        //Dislike buttons
        let dislikebtn = document.querySelector('#dislikebtn');
        let input1 = document.querySelector('#input1');
        let input2 = document.querySelector('#input2');

        //Event Listener:click
        likebtn.addEventListener('click', () => {
                input1.value = parseInt(input1.value) + 1;
                input1.style.color = "#12ff00";
            })
            //Event Listener:click
        dislikebtn.addEventListener('click', () => {
                input2.value = parseInt(input2.value) + 1;
                input2.style.color = "#ff0000";
            })
            //DOMContentLoaded
        document.addEventListener("DOMContentLoaded", () => {
                html()
            })
            //Review form
        const mealReviews = document.getElementById('review-points');
        //Event Listener:Submit
        document.querySelector('#form').addEventListener('submit', (e) => {
            e.preventDefault();
            let text = document.querySelector('#form textarea')
            let review = document.createElement('li');
            review.innerText = text.value;
            mealReviews.appendChild(review);
            document.querySelector('#form').reset();
        })
    })
    .catch((err) => console.log(err))