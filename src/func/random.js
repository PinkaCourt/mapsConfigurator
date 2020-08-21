//округление в сдвиге
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }

// должен принимать только флот
export function coordinateRandom(coordinate) {
    //сдвиг координат
    let k = parseFloat('0.000' + crypto.getRandomValues(new Uint8Array(1))[0])
    let randomCoordinates;
    // "рандомно складываем или вычитаем координату из коэффициента"
    Math.random() > 0.5 ? 
        randomCoordinates = round((coordinate + k), 6) :
        randomCoordinates = round((coordinate - k), 6);
    //console.log('randomCoordinates', randomCoordinates)
    return randomCoordinates;
    }
