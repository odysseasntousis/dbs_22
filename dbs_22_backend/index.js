const express=require('express')
const cors=require('cors');
const app= express();
app.use(cors());
const port=9103;

app.listen(port,()=>{
	console.log("Example: port "+port);
});
app.get('/',(req,res)=>{
	res.send("test_ok")
})
const q3_1=require("./q3_1.js");
const q3_2_0=require("./q3_2_0.js");
const q3_2_1=require("./q3_2_1.js");
const q3_3=require("./q3_3.js");
const q3_4=require("./q3_4.js");
const q3_5=require("./q3_5.js");
const q3_6=require("./q3_6.js");
const q3_7=require("./q3_7.js");
const q3_8=require("./q3_8.js");
app.use('/',q3_8);
app.use('/',q3_7);
app.use('/',q3_6);
app.use('/',q3_5);
app.use('/',q3_4);
app.use('/',q3_3);
app.use('/',q3_2_1);
app.use('/',q3_2_0);
app.use('/',q3_1);

