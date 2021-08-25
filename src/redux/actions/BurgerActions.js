import { RESET, TANG_GIAM_SOLUONG, THANH_TOAN } from './../constants/BurgerConstants';


export const tangGiamSoLuong = (key, tangGiam) => {
    return ({
        type: TANG_GIAM_SOLUONG,
        key,
        tangGiam
    })
};

export const thanhToanAction = () => {
    return({
        type: THANH_TOAN
    })
}


export const resetAction = () => {
    return({
        type: RESET
    })
}