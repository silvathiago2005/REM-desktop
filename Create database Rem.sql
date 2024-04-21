BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Perfis" (
	"id"	INTEGER NOT NULL,
	"description"	TEXT NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "Imoveis" (
	"Id"	INTEGER NOT NULL,
	"IdLocador"	INTEGER NOT NULL,
	"TypeContract"	TEXT NOT NULL,
	"IptuOwner"	INTEGER NOT NULL,
	"Type"	TEXT(20) NOT NULL,
	"Footage"	INTEGER,
	"Address"	TEXT(100) NOT NULL,
	"City"	TEXT(50),
	"Brotherhood"	TEXT(50),
	"Cep"	TEXT(10),
	"Dormitory"	INTEGER,
	"Suites"	INTEGER,
	"Bathroom"	INTEGER,
	"Garage"	INTEGER,
	"DinnerRoom"	INTEGER,
	"TvRoom"	INTEGER,
	"ServiceArea"	INTEGER,
	"Top"	INTEGER,
	"SalesPrice"	TEXT(20),
	"RentPrice"	TEXT(20),
	"FirstRent"	TEXT(20),
	"AdministrationRent"	INTEGER,
	"ValueRent"	TEXT(20),
	"AdministrationSale"	INTEGER,
	"ValueSale"	TEXT(20),
	"Actived"	BOOLEAN,
	"DataCreated"	DATE,
	"DataEdited"	DATE,
	PRIMARY KEY("Id")
);
CREATE TABLE IF NOT EXISTS "Locadores" (
	"Id"	INTEGER NOT NULL,
	"Name"	TEXT(100) NOT NULL,
	"Email"	TEXT(100) NOT NULL,
	"Phone"	TEXT(50),
	"CellPhone"	TEXT(50),
	"Address"	TEXT(100) NOT NULL,
	"Number"	INTEGER,
	"City"	TEXT(50),
	"Brotherhood"	TEXT(50),
	"Cep"	TEXT(10),
	"Actived"	BOOLEAN,
	"DataCreated"	DATE,
	"DataEdited"	DATE,
	PRIMARY KEY("Id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Locatarios" (
	"Id"	INTEGER NOT NULL,
	"Name"	TEXT(50) NOT NULL,
	"Email"	TEXT(100),
	"Phone"	TEXT(50),
	"CellPhone"	TEXT(50),
	"Address"	TEXT(100) NOT NULL,
	"Number"	INTEGER,
	"City"	TEXT(50),
	"Brotherhood"	TEXT(50),
	"Cep"	TEXT(10),
	"Contract"	BOOLEAN,
	"Actived"	BOOLEAN,
	"DataCreated"	DATE,
	"DataEdited"	DATE,
	PRIMARY KEY("Id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Usuarios" (
	"id"	INTEGER NOT NULL,
	"name"	TEXT(100) NOT NULL,
	"username"	TEXT(50) NOT NULL,
	"password"	TEXT(50) NOT NULL,
	"idPerfil"	INTEGER NOT NULL,
	FOREIGN KEY("idPerfil") REFERENCES "Perfis"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "ParcelasAluguel" (
	"Id"	INTEGER NOT NULL,
	"IdAluguel"	INTEGER NOT NULL,
	"Pago"	BOOLEAN NOT NULL,
	"DataPagamento"	DATE NOT NULL,
	"ValorPagamento"	TEXT NOT NULL,
	FOREIGN KEY("IdAluguel") REFERENCES "Locacoes"("Id"),
	PRIMARY KEY("Id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Locacoes" (
	"Id"	INTEGER NOT NULL,
	"IdLocador"	INTEGER NOT NULL,
	"IdLocatario"	INTEGER NOT NULL,
	"IdEstate"	INTEGER NOT NULL,
	"ValorAluguel"	TEXT(50) NOT NULL,
	"Warranty"	INTEGER,
	"FinalWarranty"	DATE,
	"InitialDate"	DATE,
	"FinalDate"	DATE,
	"QtdsMonths"	INTEGER,
	"Iptu"	INTEGER,
	"Condominio"	INTEGER,
	"Gas"	INTEGER,
	"Water"	INTEGER,
	"Luz"	INTEGER,
	"DescontoValor"	TEXT(50),
	"DescontoTempo"	INTEGER,
	"DataFinalDesconto"	DATE,
	"Reajuste"	INTEGER,
	"DataReajuste"	DATE,
	"DiaPagamento"	INTEGER,
	"MultaAtraso"	INTEGER,
	"IsencaoMulta"	INTEGER,
	"DataFinalMulta"	DATE,
	"Actived"	BOOLEAN,
	"DataCreated"	DATE,
	"DataEdited"	DATE,
	"ValorIPTU"	INTEGER,
	PRIMARY KEY("Id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Notificacoes" (
	"Id"	INTEGER NOT NULL,
	"TipoNotificacoes"	TEXT(50) NOT NULL,
	"Mensagem"	TEXT(250) NOT NULL,
	"Lido"	BOOLEAN NOT NULL,
	"dataCreated"	DATE,
	PRIMARY KEY("Id")
);
COMMIT;
