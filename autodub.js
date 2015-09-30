~function(){
    // initialization
    if(!window._autodub){
        Dubtrack.Events.bind("realtime:room_playlist-update", function(){  
            window._autodubdownvote = null;
            if(window._autodub == 'on'){
                setTimeout(function(){
                    if(window._autodubdownvote){
                        return;
                    }
                    $('.dubup').trigger('click');
                }, 30e3 + (Math.random() * 30e3 | 0));
            }
        });

        $('.dubdown').bind('click', function(){
            window._autodubdownvote = true;
        });
    }

    var $chatmain = $('.chat-main');
    var $msgs = $('.chat-messages');

    // toggle
    if(window._autodub == 'on'){
        window._autodub = 'off';
        window._autodubdownvote = true;
        $chatmain.append('<li>_nderscore\'s autodub disabled!</li>');
    } else {
        window._autodub = 'on';
        $chatmain.append('<li>_nderscore\'s autodub enabled!</li>');
        $('.dubup').trigger('click');
    }

    $msgs.scrollTop($msgs.scrollTop() + 100);
}();