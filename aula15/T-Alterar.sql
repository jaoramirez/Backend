USE ti3k5791_joaovictor;


CREATE TABLE IF NOT EXISTS clientes(

-- coluna / tipo de dado / restrição
 idCliente INT PRIMARY KEY,
 nome VARCHAR(100),
 telefone VARCHAR(12)

);


ALTER TABLE clientes
ADD email VARCHAR(100); 


ALTER TABLE clientes
MODIFY email TEXT;


ALTER TABLE clientes
CHANGE COLUMN email  emailcliente VARCHAR(100);


ALTER TABLE clientes
DROP COLUMN telefone;


ALTER TABLE clientes
RENAME TO Clientes;


DROP TABLE clientes;


