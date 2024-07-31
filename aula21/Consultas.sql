SELECT departamentos.nome, AVG(cargos.salario)
FROM empregados
JOIN cargos ON empregados.departamento_id = cargos.departamento_id
JOIN departamentos ON empregados.departamento_id = departamentos.departamento_id
GROUP BY departamentos.nome
HAVING AVG(cargos.salario) > 5000.00;

SELECT departamentos.nome, SUM(cargos.salario)
FROM empregados
JOIN cargos ON empregados.departamento_id = cargos.departamento_id
JOIN departamentos ON empregados.departamento_id = departamentos.departamento_id
GROUP BY departamentos.nome
HAVING SUM(cargos.salario) > 12000.00;

SELECT cargos.titulo, COUNT(empregados.titulo)
FROM empregados
JOIN cargos ON empregados.departamento_id = cargos.departamento_id
JOIN departamentos ON empregados.departamento_id = departamentos.departamento_id
GROUP BY empregados.nome
HAVING COUNT(empregados.titulo) = 2

SELECT departamentos.departamento_id, AVG(cargos.salario)
FROM empregados
JOIN cargos ON empregados.departamento_id = cargos.departamento_id
JOIN departamentos ON empregados.departamento_id = departamentos.departamento_id
GROUP BY departamentos.nome
HAVING AVG(cargos.salario) > 4500.00;

SELECT departamentos.nome, departamentos.departamento_id, MAX(cargos.salario)
FROM empregados
JOIN cargos ON empregados.departamento_id = cargos.departamento_id
JOIN departamentos ON empregados.departamento_id = departamentos.departamento_id
GROUP BY departamentos.departamento_id
HAVING MAX(cargos.salario) > 6000.00;

SELECT departamentos.nome, departamentos.departamento_id, MIN(cargos.salario)
FROM empregados
JOIN cargos ON empregados.departamento_id = cargos.departamento_id
JOIN departamentos ON empregados.departamento_id = departamentos.departamento_id
GROUP BY departamentos.departamento_id
HAVING MIN(cargos.salario) > 2500.00;