import Lion from "./Lion";

class LionCubs extends Lion {
constructor(){
super();
console.log(`Inside LionCubs Constructor`)
}

walking=()=>{
    console.log(`Lion cubs are start to walk at 10 to 15 days old.`);
}

foodBehaviour=()=>{
    console.log(`At one year old the lion cubs are exclusively eating meat`);
};
sleepingBehaviour=()=>{
    console.log(`Lion cubs spend up to 20 hours of the day sleeping or resting`)
};

facingHuman=()=>{
    console.log(`Human runs away from lionCubs`)
}


}
export default LionCubs;