drop database if exists burgers_db;
create database burgers_db;

use burgers_db;

create table burgers(
    id int not null auto_increment,
    burger_name varchar(255),
    devoured BOOLEAN,
    primary key (id)
)