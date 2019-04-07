# TheMealDB
### This application is created to fetch meals from [TheMealDB API](https://www.themealdb.com/api/json/v1/1/randomselection.php) and return the IDs of the meals that have the least ingredients to prepare.

#### The below is how to run the application without docker.

##### Prequsites:
Before running the app locally, ensure you have the following applications installed on your system.
a. [Node Js](https://nodejs.org)
b. [Git](https://git.com)
c. A browser of your choice or an application to test API:  [Postman](https://postman.com), [Insomia](https://insomia.com), etc.

Test without docker
1. On your terminal, run the following commands.
* git clone https://github.com/DanielAdek/TheMealDB.git
* cd TheMealDB
* npm start

2. Navigate to your browser and paste the below
* http://localhost:8080/api/v1/meals

Then you will see a response like the below.

```
{
  "status": "success",
  "data": {
    "IdsOfMealsWithMinIngredients": [
      {
        "idMeal": "52848",
        "ingredientsCounted": 5
      }
    ]
  }
}
```

#### The below is how to run the application with docker.

##### Prequsites:
Before running the app with docker, ensure you have done the following
* Download Docker
* Set up an account to download Docker
* Install Docker after download
###### On your terminal
* Clone the repository. (_check test without docker_)
* Enter into directory TheMealDB.
* Run the command `docker build -t [USERNAME]/themealdb .`
* Run `docker run -p 8080:8080 -d [USERNAME]/themealdb`
* Paste http://localhost:8080/api/v1/meals in your browser.

