#!C:\Users\zx21student017\AppData\Local\Microsoft\WindowsApps\python

import json
import mysql.connector

#recuperar los datos de la base de datos
mydb = mysql.connector.connect(
    host="localhost",
    user="campeonatoFutbol",
    password="campeonatoFutbol",
    database="campeonatoFutbol"
)

#hacer la consulta
mycursor = mydb.cursor()

sql="SELECT id,EquipLocal,EquipVisitante,GolesLocal,GolesVisitante FROM Resultados ORDER BY id"
mycursor.execute(sql)

lp = mycursor.fetchall()

#convertir el array a objeto json
salida = json.dumps(lp)

#enviar la respuesta
print("Content-Type: text/plain\n")
print(salida)
