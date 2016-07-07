/**function call() {
    var msg   = $('#formx').serialize();
    $.ajax({
        type: 'POST',
        url: 'res.php',
        data: msg,
        success: function(data) {
            $('.results').html(data);
        },
        error:  function(xhr, str){
            alert('Возникла ошибка: ' + xhr.responseCode);
        }
    });
}




$('button').on('click', function (e) {
    e.preventDefault();
    var data = new FormData(document.forms.loftschool);

    $.ajax({
        xhr: function() {
            var xhr = $.ajaxSettings.xhr();
            xhr.upload.onprogress = function(e) {
                var per = Math.floor(e.loaded / e.total *100);
                $('.progress').show();
                $('.progress-bar').css('width', per+'%')
                $('#progress').text(per + '%');
            };
            // xhr.upload.onload = function() {
            //   console.log( 'Данные полностью загружены на сервер!' );
            // }
            // xhr.upload.onerror = function() {
            //   console.log( 'Произошла ошибка при загрузке данных на сервер!' );
            // }
            return xhr;
        },
        url: 'send.php', // URL к запросу.
        type: 'POST', // Тип запроса («POST» или «GET»), по умолчанию «GET».
        data: data, // Данные, которые отсылаются на сервер. Если данные не являются строкой, то они конвертируются в строку запроса. Для запросов типа GET данные прикрепляются к URL. Для предотвращения этого, используйте опцию processData.
        processData: false, // По умолчанию, данные, переданные в параметр data в качестве объекта (с технической точки зрения, что-либо кроме строки), будут обработаны и преобразованы в строку запроса, для соответствия типу данных по умолчанию — «application/x-www-form-urlencoded». Если необходимо отослать документ DOM или другие специфические данные, то установите данную опцию в false.
        contentType: false // При отсылке данных на сервер, указывайте тип данных. По умолчанию: «application/x-www-form-urlencoded», что подходит для большинства случаев.
    });
});


 $(document).ready(function(){
 $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
 var form_data = $(this).serialize(); //собераем все данные из формы
 $.ajax({
 type: "POST", //Метод отправки
 url: "send.php", //путь до php фаила отправителя
 data: form_data,
 success: function() {
 //код в этом блоке выполняется при успешной отправке сообщения
 alert("Ваше сообщение отпрвлено!");
 });
 });
 });



$( document ).ready(function() {
    $(".btn-works").click(
        function(){
            call('.form-contact-works', 'res.php');
            return false;
        }
    );
});
function call() {
    var msg   = $('.form-contact-works').serialize();
    $.ajax({
        type: 'POST',
        url: 'res.php',
        data: msg,
        success: function(data) {
            $('.results').html(data);
        },
        error:  function(xhr, str){
            alert('Возникла ошибка: ' + xhr.responseCode);
        }
    });
} */
/*


$('.btn-works').on('click', function (e) {
    e.preventDefault();
    var data = new FormData(document.forms.loftschool);

    $.ajax({
        xhr: function() {
            var xhr = $.ajaxSettings.xhr();
            xhr.upload.onprogress = function(e) {
                var per = Math.floor(e.loaded / e.total *100);
                $('.progress').show();
                $('.progress-bar').css('width', per+'%')
                $('#progress').text(per + '%');
            };
            // xhr.upload.onload = function() {
            //   console.log( 'Данные полностью загружены на сервер!' );
            // }
            // xhr.upload.onerror = function() {
            //   console.log( 'Произошла ошибка при загрузке данных на сервер!' );
            // }
            return xhr;
        },
        url: 'res.php', // URL к запросу.
        type: 'POST', // Тип запроса («POST» или «GET»), по умолчанию «GET».
        data: data, // Данные, которые отсылаются на сервер. Если данные не являются строкой, то они конвертируются в строку запроса. Для запросов типа GET данные прикрепляются к URL. Для предотвращения этого, используйте опцию processData.
        processData: false, // По умолчанию, данные, переданные в параметр data в качестве объекта (с технической точки зрения, что-либо кроме строки), будут обработаны и преобразованы в строку запроса, для соответствия типу данных по умолчанию — «application/x-www-form-urlencoded». Если необходимо отослать документ DOM или другие специфические данные, то установите данную опцию в false.
        contentType: false // При отсылке данных на сервер, указывайте тип данных. По умолчанию: «application/x-www-form-urlencoded», что подходит для большинства случаев.
    });
});

*/