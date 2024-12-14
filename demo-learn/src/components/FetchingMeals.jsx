import { useEffect, useState } from "react"
import axios from 'axios'

const FetchingMeals = () => {
    const [mealsPhoto, setMealsPhoto] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) =>setMealsPhoto(res.data.meals))
        //Here writing meals because when you check this api it is named as meals array of object.
    },[])


    return(
        <>
            <div>
                {mealsPhoto.map((meal)=> (
                    <img key={meal.idMeal} src={meal.strMealThumb} alt={meal.strMeal} width={400}/>
                ))}
            </div>
        </>
    )
}

export default FetchingMeals