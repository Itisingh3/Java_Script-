let src={
    age:12,
    wt:68,
    ht:180
};

// method 1(spread operator) of cloning. In this cloning src and dest will point to different address space.
// let dest={...src};    

// method 2 of cloning. In this cloning src and dest will point to same address space.
// let dest=src;


// method 3(assign operator) of cloning. In this cloning src and dest will point to different address space.
// let dest =Object.assign({},src);


// method 4(iteration) of cloning.In this cloning src and dest will point to different address space.
let dest={}
for(let key in src){
    let newKey=key;
    let newValue=src[key];
    dest[newKey]=newValue;
}
src.age=56;
console.log(dest);
console.log(src);