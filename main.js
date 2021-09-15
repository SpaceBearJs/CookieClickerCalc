
const alertas = document.querySelector('.alertasCont')

const res1 = document.querySelector('#Resultado1')
const res2 = document.querySelector('#Resultado2')

const resultados1 = document.querySelector('.resultados1')
const resultados2 = document.querySelector('.resultados2')



const calcular = () => {

    const galleta1 = document.querySelector('#Galleta1').value
    const galleta2 = document.querySelector('#Galleta2').value
    const precio1 = document.querySelector('#Precio1').value
    const precio2 = document.querySelector('#Precio2').value

    if (galleta1 == '' || galleta2 == '' || precio1 == '' || precio2 == ''){
        alert('Completa los datos');
        return;
    }


    let valMenor = Math.round(precio1 / galleta1);

    let valMayor = Math.round(precio2 / galleta2);
    let margenGalletas = ''
    if (valMenor < valMayor) {
        generarAlerta('Todavia vale la pena comprar este tipo de galletas', 'alert-success');
        margenGalletas = Math.round((precio2 * galleta1 )/ galleta2)
        res1.value = `1 G/s por ${valMenor} galletas, margen de ${margenGalletas}`
        res2.value = `1 G/s por ${valMayor} galletas`

    } else {
        generarAlerta('Ya <b>NO</b> vale la pena comprar este tipo de galletas', 'alert-danger');
        margenGalletas = valMenor - valMayor
        res2.value = `1 G/s por ${valMayor} galletas, margen de ${margenGalletas}`
        res1.value = `1 G/s por ${valMenor} galletas`
    }

    resultados1.style.display = ''
    resultados2.style.display = ''

}

const generarAlerta = (mensaje, tipoAlerta) => {
    alertas.innerHTML = `
        <div class="alert ${tipoAlerta}">
            <p>
                ${mensaje}
            </p>
        </div>
    `
}

const siguiente = () =>{
    document.querySelector('#Galleta1').value = document.querySelector('#Galleta2').value
    document.querySelector('#Galleta2').value = ''
    document.querySelector('#Precio1').value = document.querySelector('#Precio2').value
    document.querySelector('#Precio2').value = ''
    ocultarResultados();
    alertas.innerHTML = ''
}


const ocultarResultados = () =>{
    resultados1.style.display = 'none'
    resultados2.style.display = 'none'
}

const verificar = (a) =>{
    if(a.code=='Enter'){
        calcular();
    }
}

document.onkeydown = verificar;

ocultarResultados();