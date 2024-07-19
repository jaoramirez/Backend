USE ti3k5791_joaovictor;

-- Crie a tabela clientes com as seguintes colunas 
CREATE TABLE Cliente 
( 
 ID_Cliente INT PRIMARY KEY AUTO_INCREMENT,  
 nome VARCHAR(50) NOT NULL,  
 Email VARCHAR(100) NOT NULL,  
 Telefone VARCHAR(12) NOT NULL,  
 Endereço VARCHAR(n),  
 UNIQUE (Email)
); 

CREATE TABLE Pedidos 
( 
 ID Pedido INT PRIMARY KEY AUTO_INCREMENT,  
 ID Cliente INT,  
 Data Pedido DATE NOT NULL,  
 Total FLOAT NOT NULL,  
); 

CREATE TABLE Categoria 
( 
 ID Categoria INT PRIMARY KEY AUTO_INCREMENT,  
 Nome Categoria VARCHAR(n) NOT NULL,  
 Quantidade INT NOT NULL,  
 UNIQUE (Nome Categoria)
); 

CREATE TABLE Produto 
( 
 ID Produto INT PRIMARY KEY AUTO_INCREMENT,  
 Nome Produto VARCHAR(n) NOT NULL,  
 Preço FLOAT NOT NULL,  
 Stock INT,  
 ID Categoria INT,  
 UNIQUE (Nome Produto)
); 

CREATE TABLE Itens Pedido 
( 
 ID Item INT PRIMARY KEY AUTO_INCREMENT,  
 ID Pedido INT,  
 ID Produto INT,  
); 

ALTER TABLE Pedidos ADD FOREIGN KEY(ID Cliente) REFERENCES Cliente (ID Cliente)
ALTER TABLE Produto ADD FOREIGN KEY(ID Categoria) REFERENCES Categoria (ID Categoria)
ALTER TABLE Itens Pedido ADD FOREIGN KEY(ID Pedido) REFERENCES Pedidos (ID Pedido)
ALTER TABLE Itens Pedido ADD FOREIGN KEY(ID Produto) REFERENCES Produto (ID Produto)
