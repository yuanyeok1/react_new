//import {floor, ceil} from 'lodash'  //此方法会导入整个loadash包
import floor from 'lodash/fp/floor';
import ceil from 'lodash/fp/ceil';

export const numberWithPrecision = (value, precision = 2) => 
    (!value ? 0 : (value > 0 ? floor : ceil)(value, precision)).toFixed(precision)

export function numberWithCommas(value, precision = 2) {
    let number = numberWithPrecision(value, precision)
    if ( !+number) return number
    // +number : string转number
    // !+number: string转成number之后，判断是否为0

    let [int, floor] = number.split('.')
    
    return (
        int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (floor ? `.${floor}` : '')
    )
};
