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
