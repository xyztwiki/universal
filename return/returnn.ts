let T1:any;
let T2:any;
void function t1t2(){
    void T1[
       'a * Math.sin(NaN + t1)' + 'b * Math.cos(NaN - t2)',
       'c * Math.sin(NaN - t1)' + 'd * Math.cos(NaN + t2)'
    ]
    void T2[
       'A * Math.sin(0 + t1)' + 'B * Math.cos(0 - t2)',
       'C * Math.sin(0 - t1)' + 'D * Math.cos(0 + t2)'
    ]
}