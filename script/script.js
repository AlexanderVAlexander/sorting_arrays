function value(){
    var inp = document.querySelector('.arrnum').value;
    var arr = inp;  
    if(arr == 0){document.querySelector('.out').innerHTML = arr + " Введите ваше число"}else{
    arr = inp.split(",").map(string => parseInt(string));
}
   return arr
}


function swap(arr, a, b){
    let t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
}



function bubbling(){
    let arr = value()
    for (let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j<arr.length-i; j++){
            if(arr[j]>arr[j+1]){
                swap(arr, j, j+1);
            }
        }
        document.querySelector('.out').innerHTML = arr + " Ваш массив отсортирован пузырьковым методом";
        }
}

function selection(){
    let arr = value()
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            swap(arr, i, indexMin);
        }
        document.querySelector('.out').innerHTML = arr + " Ваш массив отсортирован методом выбора";
    }
    }

function insertion(){
    let arr = value()
    for (let i = 1, l = arr.length; i < l; i++) {
        let current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
        document.querySelector('.out').innerHTML = arr + " Ваш массив отсортирован методом вставки";
    }
}

