#!C:\Users\mores\AppData\Local\Microsoft\WindowsApps\python
import cgi
import mysql.connector
import json

form = cgi.FieldStorage()

idFila = int(form['idFila'].value)
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
sql = "UPDATE resultados SET equipoLocal = %s, equipoVisitante = %s, puntosLocal = %s, puntosVisitante = %s WHERE id LIKE %s"
val = (el,ev,pl,pv,idFila)
mycursor.execute(sql,val)
mydb.commit()

sql2="SELECT equipoLocal, equipoVisitante, puntosLocal, puntosVisitante FROM Resultados WHERE id like %s"
val = (idFila,)
mycursor.execute(sql2,val)

lpJson = json.dumps(mycursor.fetchall())

print("Conten-type:text/plain\n")
print(lpJson)