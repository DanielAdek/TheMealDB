/* eslint-disable */
import axios from 'axios';
import { config } from 'dotenv';

config();

const url = process.env.URL;
/**
 * @class MealController
 */
class MealController {
  /**
   * @method getAllMealsWithMinIngredients
   * @memberof MealController
   * @returns {object} Json
   * @desc GET ALL IDS AND MEALS WITH MINIMUM INGREDIENTS
   * @param {object} req The request object
   * @param {object} res The response object
   */
  static async getAllMealsWithMinIngredients(req, res) {
    try {
      const arrayOfNumbers = [];
      let idMeal, ingredientsCounted;
      // FETCH ALL MEALS
      const getMeals = await axios.get(url);
      const allIngredients = getMeals.data.meals.map(meal => {
        let ingredientsCount = 0;
        // ITERATE MEAL OBJECTS
        for (let ingredients in meal) {
          if (ingredients.includes('strIngredient')) {
            if (meal[ingredients] && meal[ingredients] !== '') {
              ingredientsCount += 1;
              idMeal = meal.idMeal;
              ingredientsCounted = ingredientsCount;
            }
          }
        }
        arrayOfNumbers.push(ingredientsCounted);
        return { idMeal, ingredientsCounted };
      });
      // GET MINIMUM INGREDIENTS
      const idOfMealsWithMinIngredients = allIngredients.filter(
        meal => {
          return meal.ingredientsCounted === Math.min(...arrayOfNumbers)
         }
      );
      return res.status(200).jsend.success({ idOfMealsWithMinIngredients });
    } catch (error) {
      console.log(error);
    }
  }
}

export default MealController;
