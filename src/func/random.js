function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }
/*
рандомизатор расстояния между координатами
первоначальная цифра 0.000150 как наименьшее оптимальное расстояние
*/

export function randomDelta() {
    let r = round(Math.random(), 3) /1000 ;
    let k = round(0.000150 + r, 6);
    return k;
  }

export function mathSymbolRandom(k, coordinates) {
    let sum ;
    let e = (Math.random() - 0.5) * 2 ;
    (e > 0) ? (sum = k + coordinates) : (sum = k - coordinates)
    return sum
    
}
