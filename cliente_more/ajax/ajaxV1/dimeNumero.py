#!C:\Users\zx21student019\AppData\Local\Microsoft\WindowsApps\python.exe

import cgi

args = cgi.parse()

n - int(args['num'][0])
print("Content-Type: text/text\n")
print("hola...",n*2)
