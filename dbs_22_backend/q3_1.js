const express=require('express');
const router=express.Router();
var mysql=require('mysql');

function q3_1(req,res){
        var conn=mysql.createConnection({
                host:"localhost",
                user:"dbs_22",
                password:"dbs_22_Password",
                database:"dbs_22_tst"
        });
        conn.connect(function(err){
                if(err) res.send('error: ' + err.message);
                console.log("connected");
				var q1="select * from project ";
				var c=0;
				if(req.query.date!=null){
					c=1;
					q1=q1+'where project.start='+req.query.date+' ';
				}
				if(req.query.duration!=null){
					if(c==0){
						c=1;
						q1=q1+'where datediff(project.start,project.finish)='+req.query.duration+' ';
					}
					else{
						q1=q1+'and datediff(project.start,project.finish)='+req.query.duration+' ';
					}
				}
				if(req.query.executive_id!=null){
					if(c==0){
						c=1;
						q1=q1+'where project.managed_by_exec='+req.query.executive_id;
					}
					else{
						q1=q1+'and project.managed_by_exec='+req.query.executive_id;
					}
				}
				q1=q1+';';
				conn.query(q1,function(err,result,fields){
					try{
						console.log(q1);
						console.log(result);
                		if(err){
                			res.send({'status':'failed'});
							res.send('error: ' + err.message);
                		}
                		else{
                			res.send(result);
                		}
                	}
                	catch(error){
                		console.error(error);
                	}
                });
        })
return;
}
router.get("/q3_1",q3_1);
module.exports=router;
