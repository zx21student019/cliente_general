#!C:\Users\zx21student019\AppData\Local\Microsoft\WindowsApps\python.exe

import json
import cgi

args = cgi.parse()

n = int(args['num'][0])
m = int(args['numMin'][0])

fibo = [1,1,2,3,5,8,13,21,34,55]

print("content-Type: text/plain\n")

if n>10 and m<n and m>0:
    print(json.dumps(-1))
else:
    print(json.dumps(fibo[m-1:n]))