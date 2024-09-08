document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("animatedText");
    const text = textElement.textContent; // Получаем текст из элемента
    textElement.innerHTML = ''; // Очищаем элемент

    // Используем split('') для получения символов
    text.split('').forEach((char, index) => {
        const span = document.createElement('span'); // Создаем элемент span для каждого символа
        
        // Если символ - пробел, добавляем его в span
        if (char === ' ') {
            span.innerHTML = '&nbsp;'; // Добавляем неразрывный пробел для сохранения отступа
        } else {
            span.textContent = char; // В противном случае, просто добавляем символ
        }
        
        span.className = 'letter'; // Задаем класс
        span.style.animationDelay = `${index * 0.1}s`; // Устанавливаем задержку анимации
        textElement.appendChild(span); // Добавляем созданный span в элемент
    });
});
 
 
 /********************************Скрипт для теста онлайн записи 23.07.24******************************/
 $(document).ready(function() {
    $('#ser1').click();
    
   function addLoadedAndRemoveFee() {
        //console.log('f')
        $('div').removeClass('loader1');
        $('#btnRecord').removeClass('fee');
          var customScrollBarCSS = `
  
        ::-webkit-scrollbar {
            width: 12px;
            background-color: #f1f1f1;
        }
        
      
        ::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 6px;
        }
        
     
        ::-webkit-scrollbar-thumb:hover {
            background-color: #555;
        }
        
       
        html {
            scrollbar-width: thin;
            scrollbar-color: #888 #f1f1f1;
        }
    `;

    // Создаем элемент <style> и добавляем его в секцию <head>
    var styleElement = $('<style>').text(customScrollBarCSS);
    $('head').append(styleElement);
        
   }

    
    if ($('html').hasClass('reservi_widget_opened')) {
        addLoadedAndRemoveFee();
    } else {
        $('#ser1').click();
        let count = 0;
        
        
        function checkAndClick() {
            if (!$('html').hasClass('reservi_widget_opened')) {
                if (count < 20) {
                    $('#ser1').click();
                    setTimeout(checkAndClick, 500);
                    count += 1;
                        console.log(count)
                } 
                else {
                      console.log('Прошло c много попыток')
                    addLoadedAndRemoveFee();
                         
                }
            } 
            else {
                $('#reservi_widget-nav-icon1').click();

                function checkAndClick1() {
                     addLoadedAndRemoveFee();
                    
                    function checkAndClick12() {
                        $('#btnRecord').removeClass('fee');
                    }

                setTimeout(checkAndClick12, 1000);
                }

                setTimeout(checkAndClick1, 500);
            }
        }
        setTimeout(checkAndClick, 1000);
    }
}); 
/*скрипт для удаления иконок*/ 
$(document).ready(function(){
    $('svg[width="12"]').remove();
	$('a.uk-position-center-left svg').remove();
	$('a.uk-position-center-right svg').remove();
	$('a.uk-position-center-right-out svg').remove();
	$('a.uk-position-center-left-out svg').remove();
	$('#y').remove();
})
/*скрипт для удаления иконок конец*/ 
/*скрипт для моб меню*/ 
$(function() {
	var $menu_popup = $('.menu-popup');
	$(".menu-triger").click(function(){
		$('body').addClass('body_pointer');		
		$menu_popup.show(0);
		$menu_popup.animate(
			{right: parseInt($menu_popup.css('left'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
			300
		);
		return false;
	});	
	$(".menu-close").click(function(){
		$('body').removeClass('body_pointer');		
		$menu_popup.animate(
			{right: parseInt($menu_popup.css('right'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
			300, 
			function(){
				$menu_popup.hide(0);
			}
		);
		return false;
	});	
	$(document).on('click', function(e) {
		var block = $('.menu-popup'); // Выбираем блок, который нужно скрыть
		if (!block.is(e.target) && block.has(e.target).length === 0) {
			block.hide();
			$('.menu-popup').css('right', '')
		}
	});	
	});
/*скрипт для моб меню*/ 

/********************************Скрипт для записи онлайн банер с права******************************/
const clinic_list = [...document.querySelectorAll('#ser li')]
const clinics = [
    { name: 'Сиреневый бульвар', id: '81047c25-4e5d-4408-86f7-617d21a1e2fd' },
    { name: 'ул.Разъезжая, д.35', id: 'c549b9a7-9d2b-4625-900b-05dbfb813d05' },
    { name: 'ул.Варшавская, д.23, корп.1', id: 'bb301cb5-783b-4172-b465-c3be06ad5ea0' },
    { name: 'пр. Авиаконструкторов, д.2, корп.1', id: '32eb7e11-1d80-448f-af24-1a2a294d5237' },
    { name: 'пр. Народного Ополчения, д.10, лит.А', id: 'd2842f19-f48e-4e67-8e55-2575ac5cdedc' },
    { name: 'пр. Коломяжский, д.20', id: 'c89fcf5d-732b-4304-bfbe-0a23ba7af208' },
    { name: 'ул. Будапештская, д.83/39', id: '591f9eff-8883-48cb-b469-b9d8af9f8e68' },
    { name: 'пр. Пятилеток', id: '096a37d9-b373-4abe-b0a4-df60340d974a' }
]
clinic_list.forEach((clinic, index) => {
    clinic.addEventListener('click', e => {
        window.ReserviCloud.Widget.salon(clinics[index].id)
    })
})
/********************************Скрипт для записи онлайн банер с права конец******************************/
/********************************Скрипт для проверки поля ввода формы******************************/   
$(document).ready(function(){
$("#formz").click(function(){
     if($('#pof input[name="name"]').val() === '') {
            $('#pof input[name="name"]').addClass('uk-form-dangerfo');
        }
        else{
            $('#pof input[name="name"]').removeClass('uk-form-dangerfo');
        }
 if($('#pof input[name="phone"]').val() === '') {

            $('#pof input[name="phone"]').addClass('uk-form-dangerfo');
        }
         else{
            $('#pof input[name="phone"]').removeClass('uk-form-dangerfo');
        }
});
 $('#pof input[name="name"]').focus(function(){
      if($('#pof input[name="name"]').val() !== '') {
$('#pof input[name="name"]').removeClass('uk-form-dangerfo');
        }
         if($('#pof input[name="phone"]').val() !== '') {
$('#pof input[name="phone"]').removeClass('uk-form-dangerfo');
        }
        
    });
    
    
$("#formze").click(function(){
     if($('#pod input[name="name"]').val() === '') {
            $('#pod input[name="name"]').addClass('uk-form-dangerfo');
        }
        else{
            $('#pod input[name="name"]').removeClass('uk-form-dangerfo');
        }
 if($('#pod input[name="phone"]').val() === '') {

            $('#pod input[name="phone"]').addClass('uk-form-dangerfo');
        }
         else{
            $('#pod input[name="phone"]').removeClass('uk-form-dangerfo');
        }
});
 $('#pod input[name="name"]').focus(function(){
      if($('#pod input[name="name"]').val() !== '') {
$('#pod input[name="name"]').removeClass('uk-form-dangerfo');
        }
         if($('#pod input[name="phone"]').val() !== '') {
$('#pod input[name="phone"]').removeClass('uk-form-dangerfo');
        }
        
    }); 
    
    
    
    
    $("#form-modal").click(function(){
        /*Закрыть форму если заполнена*/
    if ($("#pom-modal input[name='name']").val() !== '' && $('#pom input[name="phone"]').val() !== '') {
         $('button[aria-label="Close"]').click();
    }
/*Закрыть форму если заполнена*/


     if($('#pom input[name="name"]').val() === '') {
            $('#pom input[name="name"]').addClass('uk-form-dangerfo');
        }
        else{
            $('#pom input[name="name"]').removeClass('uk-form-dangerfo');
        }
 if($('#pom input[name="phone"]').val() === '') {

            $('#pom input[name="phone"]').addClass('uk-form-dangerfo');
        }
         else{
            $('#pom input[name="phone"]').removeClass('uk-form-dangerfo');
        }
});
 $('#pom input[name="name"]').focus(function(){
      if($('#pom input[name="name"]').val() !== '') {
$('#pom input[name="name"]').removeClass('uk-form-dangerfo');
        }
         if($('#pom input[name="phone"]').val() !== '') {
$('#pom input[name="phone"]').removeClass('uk-form-dangerfo');
        }
        
    });    
    
    
});
/********************************Скрипт для проверки поля ввода формы конец******************************/ 



 $(document).ready(function(){
     function sayHiart() {
 $('#btnRecord').removeClass('fee');
}
setTimeout(sayHiart, 1500);
 });
