idUML integer PRIMARY KEY ,
	idProject integer NOT NULL REFERENCES Project(idProject),
	AvsC Decimal
	ASvsC Decimal
	MevsC Decimal
	APPM Decimal
	NOC integer
	NOA integer
	NOM integer
	diagramLoc string

INSERT INTO UML VALUES (null, 1, 0.5755, 0.36, 0.49, 1.0, 5, 16, 10);

INSERT INTO UML VALUES (null, 5, 0.64, 0.18, 0.49, 1.0, 5, 16, 10, null);

INSERT INTO UML VALUES (null, 7, 0.5755, 0.36, 0.49, 1.0, 5, 16, 10, null);

INSERT INTO UML VALUES (null, 8, 0.5755, 0.36, 0.49, 1.0, 5, 16, 10);

INSERT INTO UML VALUES (null, 9, 0.5755, 0.36, 0.49, 1.0, 5, 16, 10);

