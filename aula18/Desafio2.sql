CREATE TABLE IF NOT EXISTS carros_aluguel (
    CarroID INT PRIMARY KEY AUTO_INCREMENT,
    PrecoDia DECIMAL(50),
    Marca VARCHAR(100),
    Modelo VARCHAR(100),
    Placa VARCHAR(8),
    Cor VARCHAR(50),
);


    ALTER TABLE carros_aluguel
    ADD Ano DECIMAL(50)


INSERT IGNORE INTO carros_aluguel (CarroID, PrecoDia, Marca, Modelo, Placa, Cor)
VALUES(1,'100.00','Ford','Ford Ka','AFD4-FA3','Preto',2012),
      (2,'200.00','Toyota','Corolla','DS34-901','Branco',2016),
      (3,'300.00','Ford','Fiesta','SBA4-%3','Cinza',2019),
      (4,'400.00','Toyota','Carmy','ASC4-BA3','Preto',2020),
      (5,'250.00','Fiat','Uno','23FT-GT6','Vermelho',2023),
      (6,'490.00','Fiat','Palho','JH67-098','Branco',2015),
      (7,'310.00','Renault','Kiwid','AGM4-F54','Preto',2014),
      (8,'180.00','Renault','Sandeiro','BCTM-690','Branco',2019),
      (9,'2700.00','Porsche','911','DMF1-114','Verde',2021),
      (10,'1000.00','Ferrarie','SF90','A123-ADE','Vermelho',2018);

    CREATE TABLE IF NOT EXISTS Cliente (
    ClienteID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(200),
    DataNascimento DATE,
    CPF VARCHAR(11),
    Genero VARCHAR(10),
    Endereco VARCHAR(200),
);

INSERT IGNORE INTO Cliente(ClienteID, Nome, DataNascimento, CPF, Genero, Endereco)
VALUES(1,'Renata Rost','1977-01-12',09876543221,'Feminino','R. Germano lang'),
      (2,'Lizandro Ramirez','1975-07-04',12309845678,'Masculino','R. Guia Lopes'),
      (3,'Roseli Fortes','1980-02-13',18929378123,'Feminino','R. Santa Palmas'),
      (4,'Alberto Junior','1999-08-11',09901543221,'Masculino','R. Davi Nicolau'),
      (5,'Lucas Silva','2001-01-12',09876532561,'Masculino','R. Augusto Rosalino'),
      (6, 'Carla Dias', '1985-03-25', 23456789012, 'Feminino', 'R. das Flores'),
      (7, 'Pedro Santos', '1970-09-15', 34567890123, 'Masculino', 'R. da Harmonia'),
      (8, 'Mariana Lima', '1995-12-20', 45678901234, 'Feminino', 'R. do Sol'),
      (9, 'João Carlos', '1988-04-30', 56789012345, 'Masculino', 'R. da Paz'),
      (10, 'Ana Beatriz', '1992-11-11', 67890123456, 'Feminino', 'R. das Acácias'),
      (11, 'Felipe Gomes', '1983-06-06', 78901234567, 'Masculino', 'R. do Cedro');


CREATE TABLE IF NOT EXISTS alugueis_carros (
   CarroID INT,
   FOREIGN KEY (CarroID) REFERENCES carros_aluguel(CarroID),
   ClienteID INT,
   FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID),
   DataInicio DATE,
   DataTermino DATE,
   ValorTotalAluguel DECIMAL
);

ALTER TABLE alugueis_carros
CHANGE COLUMN DateTermino  DataTermino DATE;

INSERT INTO alugueis_carros (CarroID, ClienteID, DataInicio, DataTermino, ValorTotalAluguel) VALUES
(1, 1, '2024-01-01', '2024-01-05', 400.00),
(2, 1, '2024-01-06', '2024-01-10', 1000.00),
(3, 1, '2024-01-11', '2024-01-15', 1200.00),
(4, 1, '2024-01-16', '2024-01-20', 1600.00),
(5, 1, '2024-01-21', '2024-01-25', 1250.00),
(6, 1, '2024-01-26', '2024-01-30', 2450.00),
(7, 2, '2024-02-01', '2024-02-05', 2000.00),
(8, 2, '2024-02-06', '2024-02-10', 2250.00),
(9, 2, '2024-02-11', '2024-02-15', 2500.00),
(10, 2, '2024-02-16', '2024-02-20', 2750.00),
(10, 2, '2024-02-21', '2024-02-25', 3000.00),
(10, 2, '2024-02-26', '2024-03-02', 3250.00);

INSERT INTO alugueis_carros (CarroID, ClienteID, DataInicio, DataTermino, ValorTotalAluguel) VALUES
(3, 3, '2024-03-01', '2024-03-05', 1500.00),
(4, 3, '2024-03-06', '2024-03-10', 2000.00),
(5, 3, '2024-03-11', '2024-03-15', 1250.00),
(6, 3, '2024-03-16', '2024-03-20', 2450.00),
(7, 4, '2024-03-21', '2024-03-25', 1550.00),
(8, 4, '2024-03-26', '2024-03-30', 900.00),
(9, 4, '2024-03-31', '2024-04-04', 1350.00),
(10, 4, '2024-04-05', '2024-04-09', 2000.00),
(1, 5, '2024-04-10', '2024-04-14', 400.00),
(2, 5, '2024-04-15', '2024-04-19', 1000.00),
(3, 5, '2024-04-20', '2024-04-24', 1200.00),
(4, 5, '2024-04-25', '2024-04-29', 1600.00);

INSERT INTO alugueis_carros (CarroID, ClienteID, DataInicio, DataTermino, ValorTotalAluguel) VALUES
(5, 6, '2024-05-01', '2024-05-05', 1250.00),
(6, 7, '2024-05-06', '2024-05-10', 2450.00),
(7, 8, '2024-05-11', '2024-05-15', 1550.00),
(8, 9, '2024-05-16', '2024-05-20', 900.00),
(9, 10, '2024-05-21', '2024-05-25', 13500.00),
(10, 11, '2024-05-26', '2024-05-30', 5000.00);



SELECT Cliente.Nome, SUM(alugueis_carros.ValorTotalAluguel) AS Total_Pedidos
FROM Cliente
LEFT JOIN alugueis_carros ON Cliente.ClienteID = alugueis_carros.ClienteID
GROUP BY Cliente.Nome



SELECT carros_aluguel.CarroID, carros_aluguel.Marca, carros_aluguel.Modelo, COUNT(alugueis_carros.ValorTotalAluguel)
FROM carros_aluguel
LEFT JOIN alugueis_carros ON carros_aluguel.CarroID = alugueis_carros.CarroID
GROUP BY carros_aluguel.Modelo
ORDER BY COUNT(alugueis_carros.ValorTotalAluguel);