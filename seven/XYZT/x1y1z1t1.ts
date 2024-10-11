function x1() {
    for (let i = 0; i <= 3; ++i)
        for(let j = 0; i <= 3; ++j)
            for(let k = 0; k <= 3; ++k)
        continue
}
function y1(){
    for(let l = 0;-3 <= l && l <= 3; ++l || l--)
       for(let m = 0;-3 <= m && m <= 3 ;++m || m--)
          for(let n = 0 ;-3 <= n && n <= 3;++n || n--)
        break
}
function z1(){
    for(let o = 0;o >= 3;o--)
        for(let p = 0; p >= 3;p--)
            for(let q = 0; q >= 3; q--)
        continue
}
function t1(){
    do x1*y1
    while (z1)
    do x1*z1
    while (y1)
    do y1*z1
    while (x1)
}
console.log(x1,y1,z1,t1)
