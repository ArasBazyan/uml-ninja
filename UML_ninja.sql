CREATE TABLE Project (
	idProject integer PRIMARY KEY ,
	ProjectName string,
	ProjectUrl string,
	Contributers integer
);

CREATE TABLE UML (
	idUML integer PRIMARY KEY ,
	idProject integer NOT NULL REFERENCES Project(idProject),
	NoC string
);

CREATE TABLE Process (
	idDocument integer PRIMARY KEY ,
	idProject integer NOT NULL REFERENCES Project(idProject),
	DocumentName string,
	NumberOfCommits integer,
	UMLCommits integer,
	DocumenSize integer
);

