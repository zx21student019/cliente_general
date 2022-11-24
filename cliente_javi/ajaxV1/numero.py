#!C:\Users\zx21student030\AppData\Local\Programs\Python\Python310\python.exe

import cgi
args = cgi.parse()

n = int(args['num'][0])

print('Content-Type: text-text\n')

print("Numero:",n*2)