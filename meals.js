/*
    Given a meal class and an input array of meal objects, 
    find the number of unique meals in the array. Two given
    meals are considered to be the same if they contain the
    same ingredients regardless of their order.
*/


class Meal {
    constructor(ingredients, name) {
        this.name = name;
        this.ingredients = ingredients
    }   
}

function uniqueMeals(meals) {
    let uniques = {}
    for(let i = 0; i < meals.length; i++) {
        let ingredientsList = meals[i].ingredients.sort();
        if (uniques[ingredientsList] === null || uniques[ingredientsList] === undefined) {
            uniques[ingredientsList] = [meals[i].name];
        } else {
            uniques[ingredientsList].push(meals[i].name);
        }
    }
    return Object.keys(uniques).length;
}


let meal1 = new Meal(['Lettuce','Tomato','Onion','Patty'],'Basic Burger');
let meal2 = new Meal(['Cheese', 'Tomato', 'Lettuce', 'Patty'], 'Chief Cheese Burger');
let meal3 = new Meal(['Onion', 'Tomato', 'Patty', 'Lettuce'], 'Jays Burger');
let meal4 = new Meal(['Tomato', 'Patty', 'Lettuce', 'Cheese'], 'High Water Sandwich');

let meals = [meal1, meal2, meal3, meal4];

console.log(uniqueMeals(meals));