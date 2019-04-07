import { Router } from 'express';
import MealController from '../controllers/meal';
/**
 * @class MealRoutes
 */
class MealRoutes {
  /**
   * @constructor MealRoutes
   */
  constructor() {
    this.router = Router();
    this.routes();
  }

  /**
   * @method routes
   * @memberof Server
   * @desc APPLICATION  ROUTES
   * @returns {*} void
   */
  routes() {
    const { router: API } = this;

    API.route('/meals').get(MealController.getAllMealsWithMinIngredients);
  }
}

export default new MealRoutes();
