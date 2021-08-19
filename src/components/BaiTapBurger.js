import React from 'react'
import BurgerComponent from './BurgerComponent'
import MenuComponent from './MenuComponent'

export default function BaiTapBurger() {
    return (
        <div className="container main">
            {/* <h1>Bài Tập Burger</h1> */}
            <div className="row justify-content-center">
                <div className="col-8">
                    <BurgerComponent />
                </div>
                <div className="col-4">
                    <MenuComponent />
                </div>
            </div>
        </div>
    )
}
