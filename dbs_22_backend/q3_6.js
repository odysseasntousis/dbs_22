const express=require('express');
const router=express.Router();
var mysql=require('mysql');

function q3_6(req,res){
        var conn=mysql.createConnection({
                host:"localhost",
                user:"dbs_22",
                password:"dbs_22_Password",
                database:"dbs_22_tst"
        });
        conn.connect(function(err){
                if(err) res.send('error: ' + err.message);
                console.log("connected");
				var q1="select count(*) as cnt, aa.r_id, aa.f_name, aa.l_name from (select * from (select project.ID as pr_id,project.title as title, project.finish as pr_fin, researcher_id as r_id from project left join researchers_projects on project.ID=researchers_projects.project_id)a left join researcher on researcher.ID=a.r_id)aa where datediff('2022-01-01',aa.birthdate)<1500 and aa.pr_fin='1999-01-01' group by aa.r_id order by cnt;"
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
router.get("/q3_6",q3_6);
module.exports=router;
