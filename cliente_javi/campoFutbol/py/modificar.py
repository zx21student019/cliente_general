#!C:\Users\zx21student017\AppData\Local\Microsoft\WindowsApps\python

import cgi
import mysql.connector

form = cgi.FieldStorage()

idFila = form["idFilaPy"].value
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

#borrar la fila en BD
mycursor = mydb.cursor()
sql = 'UPDATE Resultados SET EquipLocal = %s, EquipVisitante = %s, GolesLocal = %s, GolesVisitante = %s WHERE id =  %s '
val=(el,ev,gl,gv,idFila)
mycursor.execute(sql,val)
mydb.commit()

print("Content-Type: text/plain\n")