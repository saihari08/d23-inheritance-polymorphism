class Lion{
    constructor(){
        console.log(`Inside Lion Constructor`);
        this.noOfEyes=2;
        this.noOfEars=2;
        this.noOfLegs=4;
    }

    foodBehaviour=()=>{
        console.log(`Lion hunts hyenas`);
    };
    sleepingBehaviour=()=>{
        console.log(`lions spend over 14 hours each day sleeping`)
    };

    facingHuman=()=>{
        console.log(`Human runs away from lion`)
    }
}

export default Lion;
