create database dbs_22_tst;
use dbs_22_tst;
create table executives(
	ID mediumint AUTO_INCREMENT,
	name varchar(30),
	primary key(ID)
);
create table program(
	ID mediumint AUTO_INCREMENT,
	name varchar(30),
	department varchar(30),
	primary key(ID)
);
create table organisation(
	ID mediumint AUTO_INCREMENT,
	name varchar(60),
	short_name varchar(20),
	postal_code mediumint,
	street varchar(30),
	city varchar(30),
	primary key(ID)
);
create table company(
	ID mediumint AUTO_INCREMENT,
	capital int unsigned,
	org_id mediumint,
	primary key(ID),
	foreign key(org_id) references organisation(ID)
);
create table university(
	ID mediumint AUTO_INCREMENT,
	org_id mediumint,
	budget int unsigned,
        primary key(ID),
        foreign key(org_id) references organisation(ID)
);
create table research_center(
        ID mediumint AUTO_INCREMENT,
        org_id mediumint,
        budget int unsigned,
	private int unsigned,
        primary key(ID),
        foreign key(org_id) references organisation(ID)
);
create table researcher(
	ID mediumint AUTO_INCREMENT,
	f_name varchar(30),
	l_name varchar(30),
	birthdate date,
	gender varchar(10),
	works_for mediumint,
	primary key(ID),
	foreign key(works_for) references organisation(ID),
	index dbay_indx(birthdate)
);
create table project(
	ID mediumint AUTO_INCREMENT,
	amount mediumint not null,
	title varchar(60),
	start date,
	finish date,
	summary tinytext,
	managed_by_exec mediumint,
	sponsorship mediumint not null,
	sc_head mediumint not null,
	researcher_0 mediumint not null,
	evaluates mediumint not null,
	managed_by_org mediumint not null,
	primary key(ID),
	foreign key(sc_head) references researcher(ID),
	foreign key(researcher_0) references researcher(ID),
	foreign key(evaluates) references researcher(ID),
	foreign key(managed_by_org) references organisation(ID),
	foreign key(sponsorship) references program(ID),
	foreign key(managed_by_exec) references executives(ID),
	index strt_indx (start),
	index fin_indx (finish),
	index org_indx (managed_by_org)
);
create table sc_fields(
        ID mediumint AUTO_INCREMENT,
        name varchar(30),
        project_id mediumint,
        primary key(ID),
        foreign key(project_id) references project(ID),
        index sc_f_indx(project_id)
);
create table deliverables(
        ID mediumint AUTO_INCREMENT,
        title varchar(30) not null,
        summary tinytext,
        project_id mediumint,
	delivered date,
	primary key(ID),
        foreign key(project_id) references project(ID)
);
create table evaluations(
	ID mediumint AUTO_INCREMENT,
	grade tinyint unsigned,
	eval_date date,
	project_id mediumint,
	constraint grade_ck check(grade between 0 and 10),
	primary key(ID),
	foreign key(project_id) references project(ID)
);
create table researchers_projects(
	ID mediumint auto_increment,
	researcher_id mediumint,
	project_id mediumint,
	primary key(ID),
	foreign key(project_id) references project(ID),
	foreign key(researcher_id) references researcher(ID)
);
