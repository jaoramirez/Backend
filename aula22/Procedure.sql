
DELIMITER//
CREATE PROCEDURE AumtentarSalario (
 IN dep_id INT, 
 IN percentual DECIMAL(5,2)
)
BEGIN 
  UPDATE cargos
  SEt salario = salario + (salario *(percentual/100))
  WHERE departamento_id = dep_id;
 END//

 DECIMAL; 

 CALL AumtentarSalario(1,10)

--  para ver o precedimento:
SHOW CREATE PROCEDURE AumtentarSalario


--Diminui salario
DELIMITER//
CREATE PROCEDURE BaixarSalario(IN dep_id INT,IN desconto DECIMAL(5,2))
BEGIN 
  UPDATE cargos
  SEt salario = salario + desconto
  WHERE departamento_id = dep_id;
 END //

 DELIMITER ; 

--Atualizar titulos 
DELIMITER //
CREATE PROCEDURE AtualizarTitulo(IN empr_id INT,IN TituloAtualizado VARCHAR(50))
BEGIN 

  DECLARE
 
  SELECT COUNT(*)
  INTO titulo_existe
  From cargos
  WHERE titulo = TituloAtualizado

  IF titulo_existe > 0 THEN 
  UPDATE empregados
  SET titulo = TituloAtualizado
  WHERE empregados_id = empr_id
  END IF;
  END //

 DELIMITER ; 

 --Atualizar departamento
DELIMITER //
CREATE PROCEDURE AtualizarDepartamento(IN empr_id INT,IN DepartamentoAtualizar INT)
BEGIN 

 DECLARE
 
  SELECT COUNT(*)
  INTO departamento_existe
  From departamentos
  WHERE departamento = departamento_existe

  IF departamento_existe > 0 THEN 
  UPDATE empregados
  SET departamento_id = DepartamentoAtualizar
  WHERE empregados_id = empr_id
  END IF;
  END //
 
 DELIMITER ; 