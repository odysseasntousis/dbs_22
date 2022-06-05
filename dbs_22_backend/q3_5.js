const express=require('express');
const router=express.Router();
var mysql=require('mysql');

function q3_5(req,res){
        var conn=mysql.createConnection({
                host:"localhost",
                user:"dbs_22",
                password:"dbs_22_Password",
                database:"dbs_22_tst"
        });
        conn.connect(function(err){
                if(err) res.send('error: ' + err.message);
                console.log("connected");
				var q1="select count(*) as cnt,aaa.sn,aaa.an from (select distinct sc_fields.name as sn,a.name as an,a.project_id from sc_fields inner join sc_fields as a on a.project_id=sc_fields.project_id where a.name!=sc_fields.name order by a.name,sc_fields.name)aaa group by aaa.sn,aaa.an order by count(*) desc;"
				conn.query(q1,function(err,result,fields){
					console.log(q1);
					console.log(result);
                	if(err){
                		res.send({'status':'failed'});
						res.send('error: ' + err.message);
                	}
                	else{
                		var d=0;
                		found=[];
                		var added=0;
                		for(var i=0;i<result.length;i++){
                			d=0;
                			if(added==3){
                				break;
                			}
                			for(var j=0;j<found.length;j++){
                				if(found[j][0]==result[i].sn&&found[j][1]==result[i].an&&found[j][2]==result[i].cnt){
                					d=1;
                				}
                				if(found[j][0]==result[i].an&&found[j][1]==result[i].sn&&found[j][2]==result[i].cnt){
                					d=1;
                				}
                			}
                			if(d==1){
                				;
                			}
                			else{
                				found.push([result[i].sn,result[i].an,result[i].cnt]);
                				added+=1;
                			}
                		}
                		res.send(found);
                	}
                });
        })
return;
}
router.get("/q3_5",q3_5);
module.exports=router;
