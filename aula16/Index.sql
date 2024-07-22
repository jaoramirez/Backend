CREATE TABLE Pedidos(
    idPedidos INT AUTO_INCREMENT PRIMARY KEY,
    idClientes INT,
    numeroPedido VARCHAR(50),
    valorTotal DECIMAL(10, 2),
    dataPedido DATE,
    FOREIGN KEY (idClientes) REFERENCES clientes(idClientes)
    );

--INSERIR PEDIDOS
    INSERT INTO Pedidos (idCliente, numeroPedido,valorTotal,dataPedido)
    VALUES(1,'PED-001',150.00,'2024-07-12'),
          (2,'PED-001',250.00,'2024-07-12'),
          (3,'PED-001',180.00,'2024-07-13');


--CONSULTA COM FUNÇÃO SUM
SELECT SUM(valorTotal) AS valor_total_pedidos
FROM Pedidos;


--CONSULYTA COM FUNÃO AVG
SELECT AVG(valorTotal) AS valor_medio_pedidos
FROM Pedidos;


--CONSULTA COM JUNÇÃO DE TABELA (JOIN)
SELECT clientes.idCliente, clientes.nome, clientes.emailcliente, Pedidos.numeroPedido
FROM clientes
INNER JOIN Pedidos ON clientes.idCliente = Pedidos.idClientes;

--CONSULTA COM JUNÇÃO CONDICIONAL (JOIN COM WHERE)
SELECT clientes.nome, COUNT(Pedidos.idPedidos)AS total_pedidos
FROM clientes
LEFT JOIN Pedidos ON clientes.idCliente = Pedidos.idClientes
GROUP BY clientes.nome;


--CONSULTA COM FUNÃO COUNT
SELECT COUNT (*)
FROM Pedidos;