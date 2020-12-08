import {getInitSelectedBalls, getInitSelectedActions} from '../utils';

/**
 *  1. 向选号篮添加一条数据
 */
export function addRecordToCart(state, action) {
    let arr = state.cartList;

    arr.push(action.payload);
    arr.map((item, index) => {
        item.xuhao = index;
        return item;
    });

    let dict =  {
        ...state,
        cartList: arr,
        content: '',
        betCounts: 0,
        betAmount: 0,
        betTimes: 1
    };

    if (state.method.plateType === 1) {
        dict.selectedBalls = getInitSelectedBalls(state.method.arr);
        dict.selectedActions = getInitSelectedActions(state.method.arr);
    } else if (state.method.plateType === 2) {
        ;
    } else if (state.method.plateType === 3) {
        dict.selectedNumbers = [];
    } else if (state.method.plateType === 4){
        dict.selectedAnimals = [];
    }

    return dict;
}

/**
 *  2. 从选号篮删除一条数据
 */
export function deleteRecordFromCart(state, action) {
    let arr = state.cartList;

    arr.splice(action.payload.xuhao, 1);
    arr.map((item, index) => {
        item.xuhao = index;
        return item;
    });

    return {
        ...state,
        cartList: arr
    };
}

/**
 *  3. 从选号篮删除所有数据
 */
export function deleteAllRecordsFromCart(state, action) {
    return {
        ...state,
        cartList: []
    };
}