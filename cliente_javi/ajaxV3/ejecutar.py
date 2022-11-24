#!C:\Users\zx21student030\AppData\Local\Programs\Python\Python310\python.exe

import json
import cgi

args = cgi.parse()

i = int(args['i'][0])
j = int(args['j'][0])

fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

print('Content-Type: text/plain\n')
print(json.dumps(fibo[i:j+1]))