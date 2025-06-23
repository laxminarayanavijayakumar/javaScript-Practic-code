
let str = 'Hello, world!';
let reversed = reverseString(str);

console.log('Type 1 : ' + reversed);

function reverseString(str){
    return str.split('').reverse().join('');
}

let str1 = 'Hello, world!';
let reverse = reverseString1(str1);

console.log('Type 2 : ' + reverse);

function reverseString1(str1){

    let reverse = '';

    for(const c of str1){
        reverse = c + reverse;
    }
    return reverse;
}


let str2 = 'Hello, world!';
let reverse1 = reverseString2(str2);

console.log('Type 3 : ' + reverse1);

function reverseString2(str2){

    return Array.from(str2).reduce((reverse1, c) => c + reverse1, '');

}

function revStr(stng){
    let revs = '';
    for(let i = stng.length-1; i >= 0; i--){
        revs += stng[i];
    }
    return revs;
}
const orgStr = 'Hello, World!';
const revstr = revStr(orgStr);
console.log('Type 4 : ' + revstr);