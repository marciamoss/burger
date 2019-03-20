drop database if exists burgers_db;
create database burgers_db;
use burgers_db;

    
create table burgers (
 id int not null auto_increment,
 burger_name varchar(50),
 devoured boolean not null default 1,
 primary key(id)
);

select * from burgers;


