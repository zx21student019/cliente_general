#!C:\Users\zx21student017\AppData\Local\Microsoft\WindowsApps\python

import cgi
import mysql.connector

form = cgi.FieldStorage()

idFila = form["idFilaPy"].value

#conectar a BD
mydb = mysql.connector.connect(
    host="localhost",
    user="campeonatoFutbol",
    password="campeonatoFutbol",
    database="campeonatoFutbol"
)

#borrar la fila en BD
mycursor = mydb.cursor()
sql = 'DELETE FROM Resultados WHERE id=' + idFila

mycursor.execute(sql)
mydb.commit()

print("Content-Type: text/plain\n")