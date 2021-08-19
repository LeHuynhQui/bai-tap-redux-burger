import { TANG_GIAM_SOLUONG, THANH_TOAN } from "../constants/BurgerConstants";

const burgerState = {
    burger: {
        salad: 1,
        cheese: 1,
        beef: 1
    },
    menu: {
        salad: 10,
        cheese: 10,
        beef: 10
    },
    total: 30
}

export const BurgerReducer =  (state = burgerState, action) => {
    switch (action.type) {

        case TANG_GIAM_SOLUONG : {

            let burgerUpdate = {...state.burger};

            let item = action.key;

            if(action.tangGiam) {
                burgerUpdate = {...burgerUpdate, [item]: state.burger[item] += 1}
            };

            if(!action.tangGiam && state.burger[item] > 0) {
                burgerUpdate = {...burgerUpdate, [item]: state.burger[item] -= 1}
            };

            state.burger = burgerUpdate;

            return { ...state }
        }


        case THANH_TOAN : {

            let burgerUpdate = {...state.burger};

            // REST TOTAL
            state.total = 0

            // TINH TIEN
            for (let key in burgerUpdate) {
                state.total += burgerUpdate[key] * state.menu[key]
            }

            // RESET BREAD
            // burgerUpdate = {
            //     salad: 1,
            //     cheese: 1,
            //     beef:1
            // };

            // state.burger = burgerUpdate;

            return { ...state }
        }

        default: {
            return { ...state }
        }
    }
}
