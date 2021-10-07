export default class myUtils{
    constructor(){};
}

export function validateWord(variable, palabra){
//var module = Este es mi modulo!
    if(palabra.includes(palabra)){
        return true;
    }
    return false;
}

//export(validateWord, module);

