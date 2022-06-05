const express=require('express');
const router=express.Router();
var mysql=require('mysql');

function q3_7(req,res){
        var conn=mysql.createConnection({
                host:"localhost",
                user:"dbs_22",
                password:"dbs_22_Password",
                database:"dbs_22_tst"
        });
        conn.connect(function(err){
                if(err) res.send('error: ' + err.message);
                console.log("connected");
				var q1="select aa.amount,aa.name as cmp_name, executives.name as exec_name from (select a.ID,a.amount,a.org_id,a.managed_by_org,a.managed_by_exec,organisation.name from (select project.ID,amount,org_id,managed_by_org,managed_by_exec from project left join company on project.managed_by_org=company.org_id)a inner join organisation on organisation.ID=a.org_id)aa inner join executives on executives.ID=aa.managed_by_exec order by amount desc limit 5;"
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
router.get("/q3_7",q3_7);
module.exports=router;
