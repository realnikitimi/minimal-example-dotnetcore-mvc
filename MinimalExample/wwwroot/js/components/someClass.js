
/**
 * @typedef {object} SomeClassState
 * @property {string} title
 */


export default class SomeClass {
    #state = {
        title: ""
    }
    constructor(title) {
        this.#state.title = title
    }

    get title() {
        return this.#state.title
    }
}