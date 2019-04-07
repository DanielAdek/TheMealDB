# TheMealDB
### This application is created to fetch meals from [TheMealDB API](https://www.themealdb.com/api/json/v1/1/randomselection.php) and return the IDs of the meals that have the least ingredients to prepare.

#### The below is how to run and deploy the service.

##### Make a get request to this api endpoint /api/v1/meals, on your browser, and you should see a response like the below;

```
{
  "status": "success",
  "data": {
    "IdsOfMealsWithMinIngredients": [
      {
        "idMeal": "52848",
        "count": 5
      }
    ]
  }
}
```