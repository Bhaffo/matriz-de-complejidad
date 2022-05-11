window.onload = () => {
    var valorA = 0
    var valorB = 0
    var ejes = [8, 8]
    let botonA = document.getElementById("calculo")
    let botonB = document.getElementById("calculoB")

    function validarSeleccionA(){
        let grupoA = [document.getElementById("a1"), document.getElementById("a2"), document.getElementById("a3")]
        let grupoB = [document.getElementById("b1"), document.getElementById("b2"), document.getElementById("b3")]
        let grupoC = [document.getElementById("c1"), document.getElementById("c2"), document.getElementById("c3")]
        let grupoD = [document.getElementById("d1"), document.getElementById("d2"), document.getElementById("d3")]
        let grupoE = [document.getElementById("e1"), document.getElementById("e2"), document.getElementById("e3")]
        let grupoF = [document.getElementById("f1"), document.getElementById("f2"), document.getElementById("f3")]
        let grupoG = [document.getElementById("g1"), document.getElementById("g2"), document.getElementById("g3")]
        let grupoH = [document.getElementById("h1"), document.getElementById("h2"), document.getElementById("h3")]

        if(grupoA[0].checked==true){
            valorA = parseInt(grupoA[0].value)
        }else if(grupoA[1].checked==true){
            valorA = parseInt(grupoA[1].value)
        }else if(grupoA[2].checked==true){
            valorA = parseInt(grupoA[2].value)
        }

        if(grupoB[0].checked==true){
            valorA += parseInt(grupoB[0].value)
        }else if(grupoB[1].checked==true){
            valorA += parseInt(grupoB[1].value)
        }else if(grupoB[2].checked==true){
            valorA += parseInt(grupoB[2].value)
        }

        if(grupoC[0].checked==true){
            valorA += parseInt(grupoC[0].value)
        }else if(grupoC[1].checked==true){
            valorA += parseInt(grupoC[1].value)
        }else if(grupoC[2].checked==true){
            valorA += parseInt(grupoC[2].value)
        }

        if(grupoD[0].checked==true){
            valorA += parseInt(grupoD[0].value)
        }else if(grupoD[1].checked==true){
            valorA += parseInt(grupoD[1].value)
        }else if(grupoD[2].checked==true){
            valorA += parseInt(grupoD[2].value)
        }
        
        if(grupoE[0].checked==true){
            valorA += parseInt(grupoE[0].value)
        }else if(grupoE[1].checked==true){
            valorA += parseInt(grupoE[1].value)
        }else if(grupoE[2].checked==true){
            valorA += parseInt(grupoE[2].value)
        }

        if(grupoF[0].checked==true){
            valorA += parseInt(grupoF[0].value)
        }else if(grupoF[1].checked==true){
            valorA += parseInt(grupoF[1].value)
        }else if(grupoF[2].checked==true){
            valorA += parseInt(grupoF[2].value)
        }

        if(grupoG[0].checked==true){
            valorA += parseInt(grupoG[0].value)
        }else if(grupoG[1].checked==true){
            valorA += parseInt(grupoG[1].value)
        }else if(grupoG[2].checked==true){
            valorA += parseInt(grupoG[2].value)
        }

        if(grupoH[0].checked==true){
            valorA += parseInt(grupoH[0].value)
        }else if(grupoH[1].checked==true){
            valorA += parseInt(grupoH[1].value)
        }else if(grupoH[2].checked==true){
            valorA += parseInt(grupoH[2].value)
        }


        document.getElementById('totalA').innerHTML= valorA;
        ejes[0] = valorA
    }


    function validarSeleccionB(){
        let grupoA = [document.getElementById("11"), document.getElementById("12"), document.getElementById("13")]
        let grupoB = [document.getElementById("21"), document.getElementById("22"), document.getElementById("23")]
        let grupoC = [document.getElementById("31"), document.getElementById("32"), document.getElementById("33")]
        let grupoD = [document.getElementById("41"), document.getElementById("42"), document.getElementById("43")]
        let grupoE = [document.getElementById("51"), document.getElementById("52"), document.getElementById("53")]
        let grupoF = [document.getElementById("61"), document.getElementById("62"), document.getElementById("63")]
        let grupoG = [document.getElementById("71"), document.getElementById("72"), document.getElementById("73")]
        let grupoH = [document.getElementById("81"), document.getElementById("82"), document.getElementById("83")]

        if(grupoA[0].checked==true){
            valorB = parseInt(grupoA[0].value)
        }else if(grupoA[1].checked==true){
            valorB = parseInt(grupoA[1].value)
        }else if(grupoA[2].checked==true){
            valorB = parseInt(grupoA[2].value)
        }

        if(grupoB[0].checked==true){
            valorB += parseInt(grupoB[0].value)
        }else if(grupoB[1].checked==true){
            valorB += parseInt(grupoB[1].value)
        }else if(grupoB[2].checked==true){
            valorB += parseInt(grupoB[2].value)
        }

        if(grupoC[0].checked==true){
            valorB += parseInt(grupoC[0].value)
        }else if(grupoC[1].checked==true){
            valorB += parseInt(grupoC[1].value)
        }else if(grupoC[2].checked==true){
            valorB += parseInt(grupoC[2].value)
        }

        if(grupoD[0].checked==true){
            valorB += parseInt(grupoD[0].value)
        }else if(grupoD[1].checked==true){
            valorB += parseInt(grupoD[1].value)
        }else if(grupoD[2].checked==true){
            valorB += parseInt(grupoD[2].value)
        }
        
        if(grupoE[0].checked==true){
            valorB += parseInt(grupoE[0].value)
        }else if(grupoE[1].checked==true){
            valorB += parseInt(grupoE[1].value)
        }else if(grupoE[2].checked==true){
            valorB += parseInt(grupoE[2].value)
        }

        if(grupoF[0].checked==true){
            valorB += parseInt(grupoF[0].value)
        }else if(grupoF[1].checked==true){
            valorB += parseInt(grupoF[1].value)
        }else if(grupoF[2].checked==true){
            valorB += parseInt(grupoF[2].value)
        }

        if(grupoG[0].checked==true){
            valorB += parseInt(grupoG[0].value)
        }else if(grupoG[1].checked==true){
            valorB += parseInt(grupoG[1].value)
        }else if(grupoG[2].checked==true){
            valorB += parseInt(grupoG[2].value)
        }

        if(grupoH[0].checked==true){
            valorB += parseInt(grupoH[0].value)
        }else if(grupoH[1].checked==true){
            valorB += parseInt(grupoH[1].value)
        }else if(grupoH[2].checked==true){
            valorB += parseInt(grupoH[2].value)
        }

        document.getElementById('totalB').innerHTML = valorB;
        ejes[1] = valorB
    }

    botonA.addEventListener("click", validarSeleccionA)
    botonB.addEventListener("click", validarSeleccionB)

    //*****************************************************
    //Grafico

    

    const data = {
        labels: ['Red'],
            datasets: [{
                label: 'Dificultad',
                data: [
                    {x: ejes[0], y: ejes[1], r: 40}
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            }]
    }

    const config = {
        type: 'bubble',
        data,
        options: {
            layout: {
                padding: 10
            },
            scales: {
                y: {
                    beginAtZero: true,
                    min: 8,
                    max:24,
                    ticks: {
                        stepSize: 4
                    }
                },
                x: {
                    beginAtZero: true,
                    min: 8,
                    max:24,
                    ticks: {
                        stepSize: 4
                    }
                }
            }
        }
    }

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    )

    function updateChart(){
        myChart.data.datasets[0].data[0].x = ejes[0]
        myChart.data.datasets[0].data[0].y = ejes[1]
        myChart.update()
    }

    btnActualizar = document.getElementById("actualizar")
    btnActualizar.addEventListener("click", updateChart)
}