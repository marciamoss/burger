-- * Insert some data into the table.
use burgers_db;

insert into burgers(burger_name) 
values('Double Cheese Burger'),('Bacon cheeseburger'),('Barbecue burger');

select * from burgers;