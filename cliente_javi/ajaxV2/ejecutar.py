#!C:\Users\zx21student030\AppData\Local\Programs\Python\Python310\python.exe

import json
import cgi

args = cgi.parse()

n = int(args['num'][0])

fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

if( n > 10  or n <= 0):
     print('Content-Type: text/plain\n')
     print(json.dumps(-1))
else:
     print('Content-Type: text/plain\n')
     print(json.dumps(fibo[:n]))