import capitalise from "./capitalise";

function capitaliseEachChar(val: string): string {
    return val?.split(" ")
        .map(val => capitalise(val)).join(" ");
}

export default capitaliseEachChar;