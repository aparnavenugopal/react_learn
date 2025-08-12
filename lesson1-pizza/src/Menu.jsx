import React from 'react'
import Pizza from './Pizza'
import "./index.css"
import { pizzaData } from './data'

const Menu = () => {
  const numPizzas = pizzaData.length;
  return (
    <div className="menu"> 
        <h2>Our Menu</h2>
        {
            numPizzas>0 && (
                 <ul className="pizzas"> 
            {
                pizzaData.map((pizza) => {
                    return (
                        <Pizza pizzaObj = {pizza} />
                    )
                })
            }
        </ul>
            )
        }
         {/* {
            numPizzas>0 ? (
                 <ul className="pizzas"> 
            {
                pizzaData.map((pizza) => {
                    return (
                        <Pizza pizzaObj = {pizza} />
                    )
                })
            }
        </ul>
            ): null
        } */}
      
    </div>
  )
}

export default Menu