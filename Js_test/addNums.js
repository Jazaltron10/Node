//METHOD-1 : EXPORTING AND IMPORTING : COMMON.JS
function sasNums (a,b){
    return a + b;
}

module.exports = sasNums;


/* //METHOD-2 : EXPORTING AND IMPORTING : ES6
function sasNums (a,b){
    return a + b;
}

export {sasNums} ; */