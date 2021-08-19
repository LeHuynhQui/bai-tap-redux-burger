import React from 'react'
import { useSelector } from 'react-redux'

export default function BurgerComponent() {
    const {burger} = useSelector(state => state.BurgerReducer)


    const renderBurger = () => {
        let content = [];
        for(let i = 0; i < burger.salad; i++) {
            content.push(<div className="salad" key={Math.random()}></div>)
        }
        for(let i = 0; i < burger.cheese; i++) {
            content.push(<div className="cheese" key={Math.random()}></div>)
        }

        for(let i = 0; i < burger.beef; i++) {
            content.push(<div className="beef" key={Math.random()}></div>)
        }

        return content.map(item => {
            return item
        }) 
    }

    return (
        <div className="text-center">
            <h2 className="mb-5">Cửa hàng Burger</h2>
            <div className="breadTop"></div>
            {renderBurger()}
            <div className="breadBottom"></div>
        </div>
    )
}
