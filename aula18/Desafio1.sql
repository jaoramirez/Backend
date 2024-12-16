CREATE TABLE IF NOT EXISTS Produtos (
    ProdutoID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100) NOT NULL,
    Categoria VARCHAR(50),
    Marca VARCHAR(100),
    Modelo VARCHAR(100),
    Cor VARCHAR(50),
    Preco VARCHAR(50),
    Nacionalidade VARCHAR(50),
    Fabricacao DATE,
  
);

ALTER TABLE Produtos
MODIFY Preco FLOAT;

INSERT IGNORE INTO Produtos (ProdutoID, nome, Categoria, Marca, Modelo, Cor, Preco, Nacionalidade, Fabricacao)
VALUES(1,'Computador','Eletrinico','Dell','G15','Preto',6000.00,'China','2024-01-10'),
(2,'Celular','Eletrinico','Sansung','A34','Branco',1900.00,'Estados Unidos','2023-09-11'),
(3,'Celular','Eletrinico','Sansung','S24 Plus','Preto',3100.00,'Estados Unidos','2023-11-19'),
(4,'Celular','Eletrinico','Apple','Iphone 14','Verde',3500.00,'China','2023-11-10'),
(5,'Celular','Eletrinico','Apple','Iphone 13','Preto',3000.00,'China','2022-11-15'),
(6,'Tablet','Eletrinico','Sansung','S6 Lite','Preto',1799.00,'Estados Unidos','2023-10-20'),
(7,'Tablet','Eletrinico','sansung','A9 Ultra','Rose',1100.00,'Estados Unidos','2023-03-27'),
(8,'Tablet','Eletrinico','Apple','Ipad 9a','Cinza',4599.00,'China','2024-01-10'),
(9,'Fones','Eletrinico','Sansung','Buds FE','Branco',799.00,'Estados Unidos','2023-11-09'),
(10,'Fones','Eletrinico','Apple','AirPods Max','Cinza',3899.00,'China','2024-06-11');


ALTER TABLE Produtos
ADD SemEstoque VARCHAR(100); 
   
ALTER TABLE Produtos
MODIFY SemEstoque BOOLEAN;

      
UPDATE Produtos
SET SemEstoque = TRUE
WHERE ProdutoID != 2;

UPDATE Produtos
SET SemEstoque = FALSE
WHERE ProdutoID = 2;

SELECT *
FROM Produtos
ORDER BY SemEstoque = TRUE ASC
LIMIT 5;

