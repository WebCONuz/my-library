var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer AQAAAAAuhgn1AAd7emA_8Miq-U1lleUrP-tyi_A");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api-metrika.yandex.net/stat/v1/data/bytime?metrics=ym:s:visits&date1=30daysAgo&date2=today&group=day&id=86264611", requestOptions)
  .then(response => response.json())
  .then(result => { 
    let dataDate = []; 
    let dataData = [];
    // console.log(result);
    result.time_intervals.forEach(([item]) => {
      dataDate.push(item);
    })
    // console.log(dataDate);
    dataData = result.data[0].metrics[0];
    // console.log(dataData);
    const ctx = document.getElementById('canvas').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dataDate,
            datasets: [{
                label: 'Statistika',
                data: dataData,
                backgroundColor: 'transparent',
                borderColor: 'green',
                borderWidth: 4
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                      // forces step size to be 1 units
                      stepSize: 1
                    }
                }
            }
        }
    });
  })
  .catch(error => console.log('error', error));