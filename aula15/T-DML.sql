INSERT INTO clientes (idCliente, nome, emailcliente)
VALUES(1,'João Silva','joaosilva@gmail.com'),
      (2,'João Pedro','joaopedro@gmail.com'),
      (3,'Antania Gomes','antoniagomes@gmail.com'),
      (4,'Lucas Sezar','lucassezar@gmail.com');

--MUDAR 
UPDATE clientes
SET email = 'email@gmail.com'
WHERE id = 3;
-- TEM QUE TER O 'WHERE' É SÉRIO, TEM MESMO QUE TER 


--DELET
DELET FROM clientes
WHERE idCliente = 3;
-- TEM QUE TER O 'WHERE' É SÉRIO, TEM MESMO QUE TER 


--CONSULTA
SELECT idCliente,nome,email
FROM clientes;
--Ou se quiser todos é só por o '*'
SELECT *
FROM clientes;


--CONSULTA COM FILTRO
SELECT emailcliente
FROM clientes
WHERE idCliente = 2;


--CONSULTA COM ORDENÇÂO
SELECT *
FROM clientes
ORDER BY nome ASC;-- Ou DESC


