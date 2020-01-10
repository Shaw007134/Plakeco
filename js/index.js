layui.use(['carousel', 'element'], function () {
  var carousel = layui.carousel;
  var element = layui.element;
  var $ = layui.jquery;

  //轮播实例
  carousel.render({
    elem: '#banner',
    width: '100%',
    height: '649px',
    arrow: 'always',
  });

  //滚动监听
  $(window).scroll(function () {
    var scr = $(document).scrollTop();
    scr > 0 ? $(".nav").addClass('scroll') : $(".nav").removeClass('scroll');
  });

  //导航切换
  var btn = $('.nav').find('.nav-list').children('button'),
    spa = btn.children('span'),
    ul = $('.nav').find('.nav-list').children('.layui-nav');

  btn.on('click', function () {
    if (!$(spa[0]).hasClass('spa1')) {
      spa[0].className = 'spa1';
      spa[1].style.display = 'none';
      spa[2].className = 'spa3';
      ul.css('display', 'block');
      ul.addClass('lay-nav-coll')
      ul.children('.layui-nav-item').addClass('lay-nav-coll-item')
      // ul.children('.layui-nav-item').css('line-height', '40px')
      $('.nav')[0].style.height = 90 + ul[0].offsetHeight + 'px';
      console.log($('.nav')[0].style.height)
    } else {
      spa[0].className = '';
      spa[1].style.display = 'block';
      spa[2].className = '';
      ul.removeClass('lay-nav-coll');
      // ul.addClass('lay-nav-hide');
      ul.children('.layui-nav-item').removeClass('lay-nav-coll-item')
      ul.css('display', 'none');
      $('.nav')[0].style.height = 80 + 'px';
    }
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
