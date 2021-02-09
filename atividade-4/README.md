## Atividade 4
Criar um objeto com uma função "privada" (variáveis que não dá para acessar de outro lugar) usando closures

### Solução
```js
function fora() {
    const variavelInacessivel = "inacessível";

    function dentro() {
        console.log(variavelInacessivel);
    }

    const objeto = {
        dentro: dentro
    };

    return objeto;
}

const objeto = fora();
objeto.dentro();

// dessa forma, protegemos a variavelInacessivel que está declarada na função fora()

```

Para testar, tenha o node instalado e rode no terminal:

```
node atividade-1.js
```
