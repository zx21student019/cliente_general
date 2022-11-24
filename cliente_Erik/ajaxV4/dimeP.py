#!C:\Users\mores\AppData\Local\Microsoft\WindowsApps\python

import json
import cgi

args = cgi.parse()

id = args['ident'][0]

personas = {
	"qwer":{"nombre":"Juan","apellidos":"Lopez Fernandez", "edad":34},
	"asdf":{"nombre":"Ana","apellidos":"Garcia Rodriguez", "edad":36},
	"zxcv":{"nombre":"Jose","apellidos":"Lopez Garcia", "edad":4}
}


print("Content-Type: text/plain\n")

if id in personas:
	print(json.dumps(personas[id]))
else:
	print(json.dumps(-1))
