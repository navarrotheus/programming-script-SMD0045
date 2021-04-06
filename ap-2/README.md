## AP - 2
O servidor deve responder com uma pagina html com uma caixa de texto e um botão.
Ao clicar no botão, o conteúdo da caixa de texto é enviado para o servidor e um outro
número é retornado pelo servidor.
Esse numero deve ser igual ao número enviado somado com 2. 

### Solução
Temos nosso servidor no arquivo _servidor.py_.

Envie uma requisição GET para a rota padrão enviando um número, exemplo:
GET /2
O retorno será 4

```
python servidor.py
```
