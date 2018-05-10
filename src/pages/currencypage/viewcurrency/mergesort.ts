
export default function MergeSort(items: number[]): number[] { // we input the price of the currencies as numbers
    return divide(items);
}

// math library is already imported in angular js
function divide(items: number[]): number[] {
    var divide_length = Math.ceil(items.length / 2); // divide the length in half and use the upper bound of the length
    var lower_bound = items.slice(0, divide_length);
    var upper_bound = items.slice(divide_length); // the other half of the from ---
    if (divide_length > 1) {
        lower_bound = divide(lower_bound);
        upper_bound = divide(upper_bound);
    }
    return combine(lower_bound, upper_bound);
}

// recursively dividing the length in half until the length is 2

// takes the upper bound and the lower bound and compare both of them
function combine(low: number[], high: number[]): number[] {
    var indexLow = 0;
    var indexHigh = 0;
    var lengthLow = low.length;
    var lengthHigh = high.length;
    var combined = [];
    while (indexLow < lengthLow || indexHigh < lengthHigh) {
        var lowItem = low[indexLow];
        var highItem = high[indexHigh];
        if (lowItem !== undefined) {
            if (highItem === undefined) {
                combined.push(lowItem);
                indexLow++;
            } else {
                if (lowItem <= highItem) {
                    combined.push(lowItem);
                    indexLow++;
                } else {
                    combined.push(highItem);
                    indexHigh++;
                }
            }
        } else {
            if (highItem !== undefined) {
                combined.push(highItem);
                indexHigh++;
            }
        }
    }
    return combined;
}
