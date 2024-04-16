const express = require("express");

const app = express();

function calculate(n){
    let ans = 0;
    for(let i=0; i<=n; i++){
        ans = ans+i;
    }
    return ans;
}

app.get("/", (req, res) => {
    const n = req.query.n;     // localhost:3000?n=6
    const sum = calculate(n);
    res.send("Your answer is: " + sum);
})

app.listen(3000);