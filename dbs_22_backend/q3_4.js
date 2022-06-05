const express=require('express');
const router=express.Router();
var mysql=require('mysql');

function q3_4(req,res){
        var conn=mysql.createConnection({
                host:"localhost",
                user:"dbs_22",
                password:"dbs_22_Password",
                database:"dbs_22_tst"
        });
        conn.connect(function(err){
                if(err) res.send('error: ' + err.message);
                console.log("connected");
				var q1="select a.* from (select count(*) as ct,managed_by_org,year(start) as y from project group by managed_by_org,year(start) order by managed_by_org,year(start))a where ct>=1;";
				var arr=[]
				conn.query(q1,function(err,result,fields){
					console.log(q1);
					console.log(result);
                	if(err){
                		res.send({'status':'failed'});
						res.send('error: ' + err.message);
                	}
                	else{
                		var pr_id=0;
                		var pr_year=0
                		for(let i=0;i<result.length;i++){
                			if(result[i].managed_by_org==pr_id && result[i].y==pr_year+1){
                				if(arr.includes(pr_id)){
                					;
                				}
                				else{
                					arr.push(pr_id);
                				}
                			}
                			pr_id=result[i].managed_by_org;
                			pr_year=result[i].y;
                		}
                		res.send(arr);
                	}
                });
        })
return;
}
router.get("/q3_4",q3_4);
module.exports=router;
