;(function($){
    $.fn.babo = function(){
        // $(this).css({background:'#cc0'});
        // this.css({background:'#cc0'});
        $(this).css({background:'#c00'});
    }
    
    $.obj = {
        smothScroll : function(z){
            var x = '#' + z;
                console.log('전달 매개변수 ' + x );
                $('html, body').stop().animate({scrollTop: $( x ).offset().top },600);
        }
    }

})(jQuery);



(function($){

    var a = [0,1,2,3,4,5,6];
    var imsi=null;
        //next
        $('#gallery').on({
            click:  function(){
                imsi = a.shift(); //맨앞을 삭제하고 맨뒤에 삽입
                a.push(imsi);
                slideFn();
            }
        });

      

})(jQuery);
//slide_3D.js