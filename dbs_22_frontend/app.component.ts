import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fr';
  sample_data:string;
  test0:[];
  constructor(private http: HttpClient){
  	this.sample_data="0";
  	this.test0=[];
  }
  clear_data(){
  	this.sample_data="0"
  	this.test0=[]
  	return this.test0;
  }
  show_data_8(){
  	this.sample_data="8"
  	this.http.get<any>("http://localhost:9103/q3_8").subscribe(
  		response=>{
  			this.test0=response;
  		}
  	);
  	return this.test0;
  }
  show_data_2_0(){
  	this.sample_data="2_0";
  	this.http.get<any>("http://localhost:9103/q3_2_0").subscribe(
  		response=>{
  			this.test0=response;
  		}
  	);
  	return this.test0;
  }
  show_data_2_1(){
  	this.sample_data="2_1";
  	this.http.get<any>("http://localhost:9103/q3_2_1").subscribe(
  		response=>{
  			this.test0=response;
  		}
  	);
  	return this.test0;
  }
  show_data_4(){
  	this.sample_data="4";
  	this.http.get<any>("http://localhost:9103/q3_4").subscribe(
  		response=>{
  			this.test0=response;
  		}
  	);
  	return this.test0;
  }
  show_data_5(){
  	this.sample_data="5";
  	this.http.get<any>("http://localhost:9103/q3_5").subscribe(
  		response=>{
  			this.test0=response;
  		}
  	);
  	return this.test0;
  }
  show_data_6(){
  	this.sample_data="6";
  	this.http.get<any>("http://localhost:9103/q3_6").subscribe(
  		response=>{
  			this.test0=response;
  		}
  	);
  	return this.test0;
  }
  show_data_7(){
  	this.sample_data="7";
  	this.http.get<any>("http://localhost:9103/q3_7").subscribe(
  		response=>{
  			this.test0=response;
  		}
  	);
  	return this.test0;
  }
  show_data_3(sc_f:string){
  	this.sample_data="3";
  	this.http.get<any>("http://localhost:9103/q3_3/"+sc_f).subscribe(
  		response=>{
  			this.test0=response;
  		}
  	);
  	return this.test0;
  }
  show_data_1(dt:string,dr:string,exec:string){
  	this.sample_data="1";
  	var url="http://localhost:9103/q3_1/"
  	var c=0;
  	if(dt.length==10){
  		url=url+"?date='"+dt+"'";
  		c=1;
  	}
  	if(dr.length>0){
  		if(c==0){
  			url=url+"?duration="+dr;
  			c=1;
  		}
  		else{
  			url=url+"&&duration="+dr;
  		}
  	}
  	if(exec.length>0){
  		if(c==0){
  			url=url+"?executive_id="+exec;
  			c=1;
  		}
  		else{
  			url=url+"&&executive_id="+exec;
  		}
  	}
  	if(c==1){
  		this.http.get<any>(url).subscribe(
  			response=>{
  				this.test0=response;
  			}
  		);
  		return this.test0;
  	}
  	else{
  		return [];
  	}
  }
}
