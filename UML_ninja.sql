CREATE TABLE Project (
	idProject integer PRIMARY KEY ,
	ProjectName char,
	ProjectUrl char,
	Contributers integer
);

CREATE TABLE UML (
	idUML integer PRIMARY KEY ,
	idProject integer NOT NULL REFERENCES Project(idProject),
	AvsC Decimal,
	ASvsC Decimal,
	MevsC Decimal,
	APPM Decimal,
	NOC integer,
	NOA integer,
	NOM integer,
	diagramLoc char
);

CREATE TABLE Process (
	idDocument integer PRIMARY KEY ,
	idProject integer NOT NULL REFERENCES Project(idProject),
	DocumentName char,
	NumberOfCommits integer,
	UMLCommits integer,
	DocumenSize integer
);

