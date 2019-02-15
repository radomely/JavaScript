import moment from 'moment';

export function sum (...args){
 return args.reduce((acc, el) => acc + el , 0);
}

// export {pow, sum, substr};