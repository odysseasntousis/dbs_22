const express=require('express');
const router=express.Router();
var mysql=require('mysql');

function q3_2_0(req,res){
        var conn=mysql.createConnection({
                host:"localhost",
                user:"dbs_22",
                password:"dbs_22_Password",
                database:"dbs_22_tst"
        });
        conn.connect(function(err){
                if(err) res.send('error: ' + err.message);
                console.log("connected");
				var q1="select researcher_id,project_id from researchers_projects order by researcher_id;";
				conn.query(q1,function(err,result,fields){
					console.log(q1);
					console.log(result);
                	if(err){
                		res.send({'status':'failed'});
						res.send('error: ' + err.message);
                	}
                	else{
                		res.send(result);
                	}
                });
        })
return;
}
router.get("/q3_2_0",q3_2_0);
module.exports=router;
