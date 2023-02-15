#!C:\Users\mores\AppData\Local\Microsoft\WindowsApps\python
import cgi
import mysql.connector
import json

form = cgi.FieldStorage()

el = form['EquipLocal'].value
ev = form['EquipVisitante'].value
pl = int(form['puntosLocal'].value)
pv = int(form['puntosVisitante'].value)

#conectar a la base de datos
mydb = mysql.connector.connect(
  host='localhost',
  user='baloncesto',
  password='baloncesto',
  database='baloncesto'
)

#insertar en la base de datos
mycursor = mydb.cursor()
sql = "INSERT INTO Resultados(equipoLocal, equipoVisitante, puntosLocal, puntosVisitante) VALUES (%s,%s,%s,%s);"
val = (el,ev,pl,pv)
mycursor.execute(sql,val)
mydb.commit()

sqlId = "SELECT @@identity"
mycursor.execute(sqlId)
idShelf = json.dumps(mycursor.fetchall())

print("Conten-type:text/plain\n")
print(idShelf)