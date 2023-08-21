class Cars {

    #position;

    constructor(position) {
        this.#position = position;
    }

    getPosition(){
        return this.#position;
    }


    setPosition(newPos){
        return this.#position = newPos
    }

}

export default Cars;