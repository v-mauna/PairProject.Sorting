const swapNums = {};
swapNums.swap = function (val1, val2){
    if(val1 > val2){
        const temp = val1;
        val1 = val2;
        val2 = temp
        
    }
    return [val1,val2]
    }
swapNums.bubbleSort= function(array){
    var origValues = array.slice();
    var length = origValues.length-1;
    do{
        var swapped = false;
        for( let i=0; i<length; i++){
            if(origValues[i]>origValues[i+1]){
                var swappedNums = swapNums.swap(origValues[i], origValues[i+1]);
                origValues[i] = swappedNums[0];
                origValues[i+1] = swappedNums[1]
                // var temp = origValues[i];
                // origValues[i] = origValues[i+1];
                // origValues[i+1] = temp;
                swapped = true;   
            }
        }
    }
    while(swapped === true);
        return origValues 
    }


// const bubbleSort = (array) => {
//     var origValues = array.slice();
//     var length = origValues.length-1;
//     do{
//         var swapped = false;
//         for( let i=0; i<length; i++){
//             if(origValues[i]>origValues[i+1]){
//                 var swappedNums = swapNums.swap(origValues[i], origValues[i+1]);
//                 origValues[i] = swappedNums[0];
//                 origValues[i+1] = swappedNums[1]
//                 // var temp = origValues[i];
//                 // origValues[i] = origValues[i+1];
//                 // origValues[i+1] = temp;
//                 swapped = true;   
//             }
//         }
//     }
//     while(swapped === true);
//         return origValues 
//     }

//     // const bubbleSort = (array) => {
//     //     var origValues = array.slice();
//     //     var length = origValues.length-1;
//     //         for( let i=0; i<length; i++){
//     //             swap(origValues[i], origValues[i+1]);
//     //         return origValues 
//     //         }
//     //     }
        
