CREATE TABLE [TipoEndereco] (
  [id] int,
  [descricao] varchar(20)
)
GO

CREATE TABLE [locador] (
  [id] int,
  [nome] varchar(100),
  [telefone] varchar(50),
  [email] varchar(50),
  [fixo] varchar(20),
  [celular] varchar(20),
  [idTipoEndereco] int,
  [endereco] varchar(50),
  [numero] int,
  [cep] varchar(10),
  [valorAdm] int,
  [actived] bit,
  [created_at] timestamp,
  [updated_at] timestamp
)
GO

CREATE TABLE [locatario] (
  [id] int,
  [nome] varchar(100),
  [telefone] varchar(50),
  [email] varchar(50),
  [fixo] varchar(20),
  [celular] varchar(20),
  [idTipoEndereco] int,
  [endereco] varchar(50),
  [numero] int,
  [cep] varchar(10),
  [actived] bit,
  [created_at] timestamp,
  [updated_at] timestamp
)
GO

CREATE TABLE [imovel] (
  [id] int,
  [locacao] bit,
  [venda] bit,
  [idTipoEndereco] int,
  [endereco] varchar(50),
  [numero] int,
  [cep] varchar(10),
  [tipoImovel] varchar(20),
  [dormitorios] int,
  [garagem] int,
  [salaJantar] bit,
  [salaEstar] bit,
  [areaServico] bit,
  [cobertura] bit,
  [metragem] int,
  [valorVenda] decimal,
  [valorLocacao] decimal,
  [actived] bit,
  [created_at] timestamp,
  [updated_at] timestamp
)
GO

CREATE TABLE [locacao] (
  [id] int,
  [idImovel] int,
  [idLocador] int,
  [idLocatario] int,
  [valor] numeric,
  [garantia] bit,
  [reajuste] int,
  [iptu] decimal,
  [condominio] decimal,
  [tipoAgua] nvarchar(255),
  [tipoLuz] nvarchar(255),
  [gas] decimal,
  [desconto] decimal,
  [qtdDesconto] int,
  [valorAluguel] decimal,
  [dataPagamento] timestamp,
  [multaAtraso] int,
  [isencaoMultaRescisao] int,
  [prazoInicial] timestamp,
  [qtdPrazoFinal] int,
  [actived] bit,
  [prazoFinal] timestamp,
  [created_at] timestamp,
  [updated_at] timestamp
)
GO

CREATE TABLE [Usuario] (
  [id] int,
  [idPerfil] int,
  [nome] string,
  [login] string,
  [senha] string,
  [actived] bit,
  [created_at] timestamp,
  [updated_at] timestamp
)
GO

CREATE TABLE [Perfil] (
  [id] int,
  [descricao] varchar(20)
)
GO

CREATE TABLE [logSystem] (
  [id] int,
  [idUsuario] int,
  [description] varchar(50),
  [oldValue] varchar(50),
  [newValue] varchar(50),
  [created_at] timestamp
)
GO

ALTER TABLE [locacao] ADD FOREIGN KEY ([idLocatario]) REFERENCES [locatario] ([id])
GO

ALTER TABLE [locacao] ADD FOREIGN KEY ([idLocador]) REFERENCES [locador] ([id])
GO

ALTER TABLE [locacao] ADD FOREIGN KEY ([idImovel]) REFERENCES [imovel] ([id])
GO

ALTER TABLE [locatario] ADD FOREIGN KEY ([idTipoEndereco]) REFERENCES [TipoEndereco] ([id])
GO

ALTER TABLE [locador] ADD FOREIGN KEY ([idTipoEndereco]) REFERENCES [TipoEndereco] ([id])
GO

ALTER TABLE [imovel] ADD FOREIGN KEY ([idTipoEndereco]) REFERENCES [TipoEndereco] ([id])
GO

ALTER TABLE [Usuario] ADD FOREIGN KEY ([idPerfil]) REFERENCES [Perfil] ([id])
GO

ALTER TABLE [logSystem] ADD FOREIGN KEY ([idUsuario]) REFERENCES [Usuario] ([id])
GO
