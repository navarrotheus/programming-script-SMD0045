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

