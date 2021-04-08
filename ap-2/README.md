## AP - 2
O servidor deve responder com uma pagina html com uma caixa de texto e um botão.
Ao clicar no botão, o conteúdo da caixa de texto é enviado para o servidor e um outro
número é retornado pelo servidor.
Esse numero deve ser igual ao número enviado somado com 2. 

### Solução
Temos nosso servidor no arquivo _servidor.py_.

Rode o servidor ```python servidor.py```

Acesse a rota /number

Nela você pode enviar um número pelo formulário, que fará uma requisição POST enviando o número.
