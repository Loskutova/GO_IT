
$(function() {
    $('.carousel-list').Carousel();


    
    
    var html = $('#test').html();
    var articles = [
      {
          title: 'Алина Лоскутова',
          position: 'Студентка ХНУРЭ',
          vk:'Мои контакты:',
          contacts: 'http://vk.com/id192667426',
          email: 'alina.loscutova@nure.ua',
          skype: 'alina.loscutova',
      }, 
  
    ];

    var content = tmpl(html, {
        data: articles
    });
    $('body').append(content);
});