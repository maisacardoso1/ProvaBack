CREATE TABLE agenda 
( ID INT IDENTITY PRIMARY KEY,
  lugare VARCHAR(30),
  data_agenda VARCHAR(10),
  hora_agenda VARCHAR(10),
  motivo VARCHAR(30)
)

INSERT INTO agenda VALUES
('Sala de aula','02-04-2023', '14:00', 'Aula história')

SELECT * FROM agenda