//округление в сдвиге
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }

// должен принимать только флот
export function coordinateRandom(coordinate) {
    let k = parseFloat('0.0' + crypto.getRandomValues(new Uint8Array(1))[0])
    let randomCoordinates;

    Math.random() > 0.5 
        ? randomCoordinates = round((coordinate + k), 6) 
        : randomCoordinates = round((coordinate - k), 6);
    return randomCoordinates;
    }
