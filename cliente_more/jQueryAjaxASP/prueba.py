#!C:\Users\zx21student019\AppData\Local\Microsoft\WindowsApps\python.exe

import cgi

form = cgi.FieldStorage()
num = int(form['numero'].value)

print("Content-Type: text/plain\n")
print(num*2)