#!C:\Users\zx21student017\AppData\Local\Microsoft\WindowsApps\python

import cgi
import mysql.connector

form = cgi.FieldStorage()

el = form["EquipLocal"].value
ev = form["EquipVisitante"].value
gl = int(form["GolesLocal"].value)
gv = int(form["GolesVisitante"].value)

#conectar a BD
mydb = mysql.connector.connect(
    host="localhost",
    user="campeonatoFutbol",
    password="campeonatoFutbol",
    database="campeonatoFutbol"
)

#insertar en BD
mycursor = mydb.cursor()
sql = 'INSERT INTO Resultados(EquipLocal, EquipVisitante, GolesLocal, GolesVisitante) VALUES (%s,%s,%s,%s)'
val = (el,ev,gl,gv)
mycursor.execute(sql,val)
mydb.commit()

print("Content-Type: text/plain\n")