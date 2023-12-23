INSERT INTO department ( id, department_name )
VALUES (1, "Legal"),
       (2, "Human Resources"),
       (3, "Customer Support"),
       (4, "Sales"),
       (5, "Operations"),
       (6, "Marketing"),
       (7, "Finance");

INSERT INTO role ( id, title, salary, department_id )
VALUES (1, "Manager", 46.9, 1 ),
       (2, "Software Developer", 80.0, 6),
       (3, "HR Specialist", 55.5, 2),
       (4, "Sales Representative", 60.0, 4),
       (5, "Customer Support Agent", 45.0, 3),
       (6, "Operations Coordinator", 55.0, 5),
       (7, "Marketing Coordinator", 55.9, 6);

INSERT INTO employee ( id, first_name, last_name, role_id, manager_id )
VALUES (13, "Millie", "Soucier", 1, 15 ),
       (17, "Catherine", "Housier", 1 , 18 ),
       (20, "Gabrella", "Monsume", 4 , 25 ),
       (24, "Howard", "Smith", 7, 16),
       (10, "Janice", "Flamingo", 6 , 28),
       (27, "Nicole", "Palm", 6 , 18 ),
       (5, "Mickayla", "Gnose", 7 , 14 );