// Função para converter números em letras
function numeroParaPalavra(num) {
    const palavras = [
        "0", "1", "2", "3", "4", "5",
        "6", "7", "8", "9", "10", "11", "12",
        "13", "14", "15", "16", "17",
        "18", "19", "20"
    ];
    return palavras[num] || num.toString(); // Retorna o número como string se não estiver na lista
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Colisão', 'Capotagem', 'Atropelamento', 'Eletrizado', 'Não informada'],
        datasets: [{
            label: 'Acidentes',
            data: [204, 14, 62, 30, 26], // Números originais
            backgroundColor: [
                'rgba(37, 36, 64, 0.5)', // Vermelho
                'rgba(37, 36, 64, 0.5)', // Azul
                'rgba(37, 36, 64, 0.5)', // Amarelo
                'rgba(37, 36, 64, 0.5)', // Verde-água
                'rgba(37, 36, 64, 0.5)' // Roxo
            ],
            borderColor: [
                'rgba(37, 36, 64, 1)', // Vermelho
                'rgba(37, 36, 64, 1)', // Azul
                'rgba(37, 36, 64, 1)', // Amarelo
                'rgba(37, 36, 64, 1)', // Verde-água
                'rgba(37, 36, 64, 1)' // Roxo
            ],
            borderWidth: 1,
            datalabels: {
                anchor: 'end',
                align: 'end',
                formatter: (value) => numeroParaPalavra(value), // Converte os números em palavras
                color: '#252440' // Cor vermelha para os rótulos de dados
            }
        }]
    },
    options: {
        plugins: {
            datalabels: {
                display: true,
                color: 'red', // Cor do texto dos rótulos
                font: {
                    weight: 'bold'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#252440' // Cor vermelha para os rótulos dos meses
                },
                title: {
                    display: true,
                    text: 'Tipo de Acidentes',
                    color: '#252440'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#252440', // Cor vermelha para os rótulos dos números
                    callback: function(value) {
                        return numeroParaPalavra(value); // Substitui os números por palavras
                    }
                },
                title: {
                    display: true,
                    text: 'Acidentes',
                    color: '#252440'
                }
            }
        },
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        elements: {
            bar: {
                borderWidth: 2, // Espessura das bordas das barras
                borderSkipped: 'bottom' // Impede a borda embaixo das barras
            }
        }
    },
    plugins: [ChartDataLabels] // Inclui o plugin
});
