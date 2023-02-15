CREATE TABLE Resultados(
    ID int NOT NULL AUTO_INCREMENT,
    EquipLocal varchar(255) NOT NULL,
    EquipVisitante varchar(255) NOT NULL,
    GolesLocal int NOT NULL,
    GolesVisitante int NOT NULL,
    PRIMARY KEY (ID)
);