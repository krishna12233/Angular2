import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Arabian special',
      'A super-tasty dish - just awesome!',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('spices', 5),
        new Ingredient('Sauce',1)
      ]),
    new Recipe('Indian cusine',
      'What else you need to say?',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg',
      [
        new Ingredient('Meat', 5),
        new Ingredient('Lentil', 1),
        new Ingredient('Tomatoes', 5)
      ]),
    new Recipe('Chow Mein',
      'What else you need to say?',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Recipe-Soup-Noodle-Curried-Spicy-Chicken-Khaosoi-2344152.jpg',
      [
        new Ingredient('Noodles', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Beans', 5)
      ])

  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
