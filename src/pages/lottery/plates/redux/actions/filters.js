/**
 *   任何一个filter的变化，都会带动投注区的控件的重置
 */

import {
    getFilters2,
    getFilters3,
    getInitSelectedBalls,
    getInitSelectedActions,
} from '../utils';

function getResetPlatePart (method) {
    let platePart;

    if (method.plateType === 1) {
        platePart = {
            selectedBalls: getInitSelectedBalls(method.arr),
            selectedActions: getInitSelectedActions(method.arr),
            content: ''
        };
    } else if (method.plateType === 2) {
        platePart = {
            content: ''
        };
    } else if (method.plateType === 3) {
        platePart = {
            selectedNumbers: [],
            content: ''
        };
    } else if (method.plateType === 4) {
        platePart = {
            selectedAnimals: [],
            content: ''
        };
    }

    return platePart;
}

function getResetEditZonePart () {
    return {
        betCounts: 0,  //投注注数
        betAmount: 0,  //投注金额
        betTimes: 1    //投注倍数
    };
}

/**
 *  1. 当filter1发生变化的处理函数
 */
export function setFilter1 (state, action) {
    let filter1      = action.payload;
    let filters2     = getFilters2(state.data, filter1);
    let filter2      = filters2[0];
    let filters3     = getFilters3(state.data, filter1, filter2);
    let filter3      = filters3[0];
    let method       = state.data[filter1][filter2].child[filter3];
    let description  = state.data[filter1][filter2].description;
    let name         = filter1 + '|' + filter2 + '|' + filter3;

    const filtersPart = {
        filter1,
        filters2,
        filter2,
        filters3,
        filter3,
        method,
        description,
        name
    };

    const editZonePart = getResetEditZonePart();
    const platePart = getResetPlatePart(method);

    return {
        ...state,
        ...filtersPart,
        ...platePart,
        ...editZonePart
    };
};

/**
 *  2. 当filter2发生变化的处理函数
 */
export function setFilter2 (state, action) {
    let filter2      = action.payload;
    let filters3     = getFilters3(state.data, state.filter1, filter2);
    let filter3      = filters3[0];
    let method       = state.data[state.filter1][filter2].child[filter3];
    let description  = state.data[state.filter1][filter2].description;
    let name         = state.filter1 + '|' + filter2 + '|' + filter3;

    const filtersPart = {
        filter2,
        filters3,
        filter3,
        method,
        description,
        name
    };

    const editZonePart = getResetEditZonePart();
    const platePart = getResetPlatePart(method);

    return {
        ...state,
        ...filtersPart,
        ...platePart,
        ...editZonePart
    };
}

/**
 *  3. 当filter3发生变化的处理函数
 */
export function setFilter3 (state, action) {
    let filter3      = action.payload;
    let method       = state.data[state.filter1][state.filter2].child[filter3];
    let name         = state.filter1 + '|' + state.filter2 + '|' + filter3;

    const filtersPart = {
        filter3,
        method,
        name
    };

    const editZonePart = getResetEditZonePart();
    const platePart = getResetPlatePart(method);

    return {
        ...state,
        ...filtersPart,
        ...platePart,
        ...editZonePart
    };
}