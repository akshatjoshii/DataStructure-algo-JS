/**
 * Created by Akshat on 12-12-2017.
 */

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function selectionSort(list) {
    var len = list.length;
    var min;

    for(var i = 0; i < len; i++){
        min = i;

        for(var j = i; j < len; j++){
            if(list[i]>list[j]){
                min = j;
            }
        }

        if(min !== i){
            swap(list, i, min);
        }
    }
}

//[2,3,1,5,4,9,7]