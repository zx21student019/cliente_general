#!C:\Users\admin\AppData\Local\Programs\Python\Python311\python.exe
import json

marcas=[[1,9.58,"Usain Bolt"],[2,9.69,"Tyson Gay"],[3,9.69,"Yohan Blake"],[4,9.72,"Asafa Powell"]]

print("Content-Type: text/plain\n")
print(json.dumps(marcas)) 