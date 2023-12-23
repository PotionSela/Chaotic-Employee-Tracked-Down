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