import { isNumber } from '../utils/number.util';
// import Vue from 'vue';

function asInteger(value, digits = 0) {
    let valueAsInteger 

    if(value && isNumber(value))
        valueAsInteger = value.toFixed(digits)

    return valueAsInteger
}

// Vue.filter('asInteger', asInteger);

export default asInteger