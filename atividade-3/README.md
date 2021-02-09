## Atividade 3
Usar Python para imprimir os números pares de 0 a 1000

### Solução
```python
# Basta um for percorrendo um range de 1000 onde caso o número atual não tenha resto, ele é par
for i in range(1000):
    if ((i+1) % 2 == 0):
        print(i+1) 
```

Para testar, tenha o python instalado e execute:
```bash
python atividade-3.py
# ou
python3 atividade-3.py
```
