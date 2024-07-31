USE company1;


CREATE TABLE departamento (
    departamento_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50)NOT NULL
    );


CREATE TABLE empregados (
    empregados_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    salarion DECIMAL(10,2)NOT NULL,
    departamento_id INT,
    FOREIGN KEY (departamento_id)REFERENCES departamentos(departamento_id)
    );

    INSERT INTO empregados (nome, salario, departamento_id) VALUES
('Robert Junior', 5000.00, 1),
('Maicon Felts', 6000.00, 1),
('Ronie Coliman', 4000.00, 2),
('Arnold Neger', 4500.00, 2),
('Julia Alves', 5200.00, 3),
('Carlos Silva', 4800.00, 3),
('Ana Pereira', 5500.00, 4),
('Marcos Souza', 4700.00, 4);


SELECT nome, salario 
FROM empregados 
WHERE salario > (SELECT AVG(salario) FROM empregados);

ALTER TABLE departamentos
ADD localizacao VARCHAR(100); 

UPDATE departamentos SET localizacao = 'São Paulo' WHERE nome = 'Vendas';
UPDATE departamentos SET localizacao = 'Rio de Janeiro' WHERE nome = 'Marketing';
UPDATE departamentos SET localizacao = 'São Paulo' WHERE nome = 'TI';
UPDATE departamentos SET localizacao = 'Belo Horizonte' WHERE nome = 'Recursos Humanos';

Exemplo com IN

SELECT nome
FROM empregados
WHERE departamento_id IN (SELECT departamento_id FROM departamentos WHERE localizacao = 'São Paulo');

Exemplo com ANY

Exemplo: Salário Maior que Qualquer Salário no Departamento de TI

SELECT nome, salario
FROM empregados
WHERE salario > ANY (SELECT salario FROM empregados WHERE departamento_id = (SELECT departamento_id FROM departamentos WHERE nome = 'TI'));

ALTER TABLE empregados ADD titulo VARCHAR(50);

CREATE TABLE cargos (
    cargos_id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    departamento_id INT,
    salario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (departamento_id) REFERENCES departamentos(departamento_id)
);

UPDATE empregados SET titulo = 'Gerente' WHERE nome = 'Robert Junior';
UPDATE empregados SET titulo = 'Assistente' WHERE nome = 'Maicon Felts';
UPDATE empregados SET titulo = 'Analista' WHERE nome = 'Ronie Coliman';
UPDATE empregados SET titulo = 'Desenvolvedor' WHERE nome = 'Arnold Neger';
UPDATE empregados SET titulo = 'Engenheiro' WHERE nome = 'Julia Alves';
UPDATE empregados SET titulo = 'Assistente' WHERE nome = 'Carlos Silva';
UPDATE empregados SET titulo = 'Analista' WHERE nome = 'Ana Pereira';
UPDATE empregados SET titulo = 'Estagiário' WHERE nome = 'Marcos Souza';


INSERT INTO cargos (titulo, departamento_id, salario) VALUES
('Gerente', 1, 8000.00),
('Assistente', 1, 4000.00),
('Analista', 2, 4500.00),
('Desenvolvedor', 3, 6000.00),
('Engenheiro', 3, 7000.00),
('Assistente', 4, 3500.00),
('Analista', 2, 4600.00),
('Estagiário', 1, 2000.00);