let score  = [10,20,30,40,50,60,70,80,90,95]
let passed = 0;
for(let i=0;i<score.length;i++){
    if(score[i]<40)score[i]+=20;
    if(score[i]>90)score[i]=90;
    if(score[i]>=50)passed++;
}
console.log("Number of Passed Students are "+passed)
console.log(score);