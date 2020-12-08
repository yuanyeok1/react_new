import { AMOUNT_PER_BET } from '../utils';

const ValidateArr = ['fish', 'lobster', 'crab'];

export function setPlate4Animal(state, action) {
    if (ValidateArr.indexOf(action.payload) === -1) {
        return state;
    }

    let arr = [...state.selectedAnimals];
    let animal = action.payload;
    let pos = arr.indexOf(animal);

    if (pos === -1) {
        arr.push(animal);
    } else {
        arr.splice(pos,1);
    }

    let betCounts = arr.length;
    let betAmount = betCounts * AMOUNT_PER_BET * state.betTimes;
    let content = arr.join('|');

    return {
        ...state,
        selectedAnimals: arr,
        betCounts,
        betAmount,
        content
    };
};
