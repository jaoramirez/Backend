CREATE TABLE IF NOT EXISTS Autores (
    AutorID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100) NOT NULL,
    Nacionalidade VARCHAR(50)
);


CREATE TABLE IF NOT EXISTS Livros (
    livroID INT PRIMARY KEY AUTO_INCREMENT,
    Titulo VARCHAR(100) NOT NULL,
    Genero VARCHAR(100),
    AnoPublicado INT,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autores(AutorID)
);


CREATE TABLE IF NOT EXISTS Clientes (
   ClienteID INT PRIMARY KEY AUTO_INCREMENT,
   Nome VARCHAR(100) NOT NULL,
   Endereco VARCHAR(100),
   Telefone VARCHAR(50)
);


CREATE TABLE IF NOT EXISTS EMPRESTIMO(
  EmprestimoID INT PRIMARY KEY AUTO_INCREMENT,
  livroID INT,
  FOREIGN KEY (livroID) REFERENCES Livros(livroID),
  ClienteID INT,
  FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
  DataEmprestimo DATE,
  DataDevolucao DATE
);



INSERT IGNORE INTO Autores (AutorID, Nome, Nacionalidade)
VALUES(1, 'Machado de Assis', 'Brasil'),
      (2, 'Truman Capote', 'Estados Unidos'),
      (3, 'William Shakespeare', 'Inglaterra');


INSERT IGNORE INTO Livros (livroID, Titulo, Genero, AnoPublicado, AutorID)
VALUES(1, 'Memórias Póstumas de Brás Cubas', 'Romance', 1881, 1),
      (2, 'A Sangue Frio', 'Romance',1965,2),
      (3, 'Hamlet', 'Drama', 1623, 3);


INSERT IGNORE INTO Clientes (ClienteID, Nome, Endereco, Telefone)
VALUES(1, 'Renata Maria', 'R. germano lang, 23', '989926897'),
      (2, 'Lasandro Silva', 'R. Guia Lops, 444', '941082823'),
      (3, 'Antina Nunes', 'R. Almas Gemias, 35', '923324321');
      


ALTER TABLE Autores
ADD DataNascimento DATE
ADD Biografia VARCHAR(1000); 


ALTER TABLE Livros
ADD Editora VARCHAR(100),
ADD NumeroPaginas INT,
ADD Idioma VARCHAR(100);


ALTER TABLE Clientes
ADD Email VARCHAR(100),
ADD DataNascimento DATE;


ALTER TABLE EMPRESTIMO 
ADD DataPrevistaDevolucao DATE,
ADD Status VARCHAR(100);



UPDATE Autores SET DataNascimento = '1839-06-21', Biografia = 'Machado de Assis é um dos mais importantes escritores brasileiros. Trabalhou como aprendiz de tipógrafo e revisor, além de ser funcionário da Secretaria de Estado do Ministério da Agricultura, Comércio e Obras Públicas.' 
WHERE AutorID = 1;

UPDATE Autores SET DataNascimento = '1924-09-20', Biografia = 'Capote foi um escritor, roteirista e dramaturgo norte-americano, escritor de vários contos, romances e peças teatrais, reconhecidas como clássicos literários, incluindo a novela Bonequinha de Luxo.' 
WHERE AutorID = 2;

UPDATE Autores SET DataNascimento = '1570-05-11', Biografia = ' Shakespeare foi um poeta, dramaturgo e ator inglês, tido como o maior escritor do idioma inglês e considerado por muitos o maior dramaturgo da história.' 
WHERE AutorID = 3;



UPDATE Clientes SET Email = 'renata@gmail.com', DataNascimento = '2000-05-20'
WHERE ClienteID = 1;

UPDATE Clientes SET Email = 'lisandro@gmail.com', DataNascimento = '1999-04-27'
WHERE ClienteID = 2;

UPDATE Clientes SET Email = 'antina@gmail.com', DataNascimento = '2003-10-29'
WHERE ClienteID = 3;



UPDATE Livros SET Editora= 'Editora Leal', NumeroPaginas = '200', Idioma = 'Português'
WHERE livroID = 1; 

UPDATE Livros SET Editora= 'Editora Great', NumeroPaginas = '300', Idioma = 'Ingles'
WHERE livroID = 2;

UPDATE Livros SET Editora= 'Editora Veneza', NumeroPaginas = '110', Idioma = 'Ingles'
WHERE livroID = 3;



UPDATE EMPRESTIMO SET DataPrevistaDevolucao = '2024-10-20', Status = 'Em andamento'
WHERE EmprestimoID = 1;

UPDATE EMPRESTIMO SET DataPrevistaDevolucao = '2024-10-10', Status = 'Em andamento'
WHERE EmprestimoID = 2;

UPDATE EMPRESTIMO SET DataPrevistaDevolucao = '2024-11-23', Status = 'Em andamento'
WHERE EmprestimoID = 3;


