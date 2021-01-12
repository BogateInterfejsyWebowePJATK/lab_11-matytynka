import NumberList from "./numberList";
import RandomGenerator from "./randomGenerator";

export default function randomNumbers({size, min, max}) {
    let randomNums = [size];

    for(let i = 0; i < size; i++) {
        randomNums[i] = RandomGenerator(min, max)
    }

    return<NumberList numbers={randomNums}/>
}
