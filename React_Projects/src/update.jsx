import React, { useState } from "react";

function Update() {
    const [foods, setFoods] = useState(['apple', 'banana', 'orange']);

    const addFood = () => {
        setFoods(prevFoods => [...prevFoods, 'lichi']);
    };

    return (
        <div>
            <ul>
                {foods.map((food, index) => (
                    <li key={index}>{food}</li>
                ))}
            </ul>
            <button onClick={addFood}>Add Lichi</button>
        </div>
    );
}

export default Update;
