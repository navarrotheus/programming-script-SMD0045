## Atividade 2
Criar um botão que, ao apertar, ele desaparece

### Solução
```js
// Basta utilizar o onclick event passando o código js responsável por ocultar o botão alterando o css 
<button id="button" onclick="document.getElementById('button').style.visibility = 'hidden'">
    Clique aqui para fazer o botão desaparecer!
</button>
```

Para testar, basta abrir o aquivo _atividade-2.html_
