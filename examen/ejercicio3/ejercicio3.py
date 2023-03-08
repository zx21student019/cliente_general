#!C:\Users\zx21student019\AppData\Local\Microsoft\WindowsApps\python.exe

import cgi,json

form = cgi.FieldStorage()
t = form['texto'].value

print("Content-Type: text/plain\n")
print(json.dumps(t.upper())) 