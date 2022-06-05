const express=require('express');
const router=express.Router();
var mysql=require('mysql');

function q3_3(req,res){
        var conn=mysql.createConnection({
                host:"localhost",
                user:"dbs_22",
                password:"dbs_22_Password",
                database:"dbs_22_tst"
        });
        conn.connect(function(err){
                if(err) res.send('error: ' + err.message);
                console.log("connected");
				var q1="select a.ID as project_id,researcher_id from (select distinct project.ID from project left join sc_fields on project.ID=sc_fields.project_id where sc_fields.name='"+req.params.field+"' and project.finish='1999-01-01')a inner join researchers_projects on a.ID=researchers_projects.project_id;";
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
router.get("/q3_3/:field",q3_3);
module.exports=router;
