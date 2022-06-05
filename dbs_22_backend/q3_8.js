const express=require('express');
const router=express.Router();
var mysql=require('mysql');

function q3_8(req,res){
        var conn=mysql.createConnection({
                host:"localhost",
                user:"dbs_22",
                password:"dbs_22_Password",
                database:"dbs_22_tst"
        });
        conn.connect(function(err){
                if(err) res.send('error: ' + err.message);
                console.log("connected");
				var q1="select * from (select count(distinct ID) as proj_cnt,f_name, l_name, researcher_id from(select distinct ID,f_name,l_name,researcher_id from (select count(del_id) as cnt,ID,f_name,l_name,researcher_id from (select aa.ID, aa.researcher_id,aa.f_name,aa.l_name,deliverables.ID as del_id from (select a.ID,a.researcher_id,researcher.f_name,researcher.l_name from(select project.ID,managed_by_org,researcher_id from project left join researchers_projects on project.ID=researchers_projects.project_id)a inner join researcher on a.researcher_id=researcher.ID)aa left join deliverables on aa.ID=deliverables.project_id)aaa group by ID,f_name,l_name,researcher_id)aaaa where cnt=0)aaaaa group by f_name,l_name,researcher_id)fin where fin.proj_cnt>=5;"
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
router.get("/q3_8",q3_8);
module.exports=router;
