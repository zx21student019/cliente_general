#!C:\Users\mores\AppData\Local\Microsoft\WindowsApps\python

import mysql.connector
import json

mydb = mysql.connector.connect(
  host='localhost',
  user='baloncesto',
  password='baloncesto',
  database='baloncesto'
)

#insertar en la base de datos
mycursor = mydb.cursor()

sql="SELECT id, equipoLocal, equipoVisitante, puntosLocal, puntosVisitante FROM Resultados"
mycursor.execute(sql)

lp = mycursor.fetchall()

datos = []

for x in lp:
  datos += {
  "id" : x[0],
  "EquipLocal" : x[1],
  "EquipVisitante" : x[2],
  "puntosLocal" : x[3],
  "puntosVisitante" : x[4]
  },

lpJson = json.dumps(datos)

print("Conten-type:text/plain\n")
print(lpJson)