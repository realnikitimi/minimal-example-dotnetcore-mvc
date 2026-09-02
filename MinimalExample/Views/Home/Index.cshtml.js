import SomeClass from "/js/components/someClass.js"

/**
 * @typedef {import('../../wwwroot/js/components/someClass').SomeClassState} SomeClassState
 */

document.addEventListener("DOMContentLoaded", () => {
    const someClass = new SomeClass("Hello world")
    console.info(someClass.title)
})