
for(let i=0; i<10; i++){
    if (i%2 === 0) {
        console.log(`${0}`)
    }else{
        console.log(`${1}`)
    }
    // console.log(`*${i+1}`);
}

console.log(`-------------------------------`);

let sto = '';
for(let i=0; i<10; i++){
    sto =  sto + (i%2)+' ';
}
console.log(sto);

console.log(`-------------------------------`);

let out = '';
for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
        out = out + '* ';
    }
    out = out + '\n';
}
console.log(out);

console.log(`-------------------------------`)

let star = "";
for(let i=1; i<10; i++){
    for(let j=0; j<i; j++){
        star = star + '* ';
    }
    star = star + '\n';
}
console.log(star);

console.log(`-------------------------------`);
let add = '';
for(let i=1; i<3; i++){
    for(let j=0; j<i; j++){
        add = add + '* ';
    }
    add = add + '\n';
}
console.log(add);
