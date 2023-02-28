let [markHeight,markWeight]= [1.69,78];
let [johnHeight,johnWeight]= [1.95,98];





let johnBMI= johnWeight/johnHeight**2;
let markBMI=markWeight/markHeight**2;

let markHIGHER=markBMI<johnBMI;

console.log(markHIGHER);