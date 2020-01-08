layui.use(['carousel','element'], function(){
  var carousel = layui.carousel;
  //轮播实例
  var element = layui.element;
  carousel.render({
    elem: '#banner',
    width: '100%',
    height: '649px',
    arrow: 'always',
  });
});


// window.onload = function(){
//   console.log('loaded')
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', "http://127.0.0.1:10001/forecast");
//   xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4){
//       if(xhr.status === 200){
//         let response = xhr.responseText;
//         response = JSON.parse(response);
//         let time = document.getElementById("time").children;
//         let temperature = document.getElementById("temperature").children;
//         let rainfall = document.getElementById("rainfall").children;
//         let windspeed = document.getElementById("windspeed").children;
//         let winddirection = document.getElementById("winddirection").children;
//         let airpressure = document.getElementById("airpressure").children;
//         let humidity = document.getElementById("humidity").children;

//         for(let i = 1; i < time.length; i++){
//           time[i].innerHTML = response[i-1].time;
//           temperature[i].innerHTML = response[i-1].temperature;
//           rainfall[i].innerHTML = response[i-1].rainfall;
//           windspeed[i].innerHTML = response[i-1].windspeed;
//           winddirection[i].innerHTML = response[i-1].winddirection;
//           airpressure[i].innerHTML = response[i-1].airpressure;
//           humidity[i].innerHTML = response[i-1].humidity;
//         }
//       }
//     }
//   }
//   xhr.send();
// }
