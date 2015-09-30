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

    // toggle
    if(window._autodub == 'on'){
        window._autodub = 'off';
        window._autodubdownvote = true;
        $('.chat-main').append('<li>_nderscore\'s autodub disabled!</li>');
    } else {
        window._autodub = 'on';
        $('.chat-main').append('<li>_nderscore\'s autodub enabled!</li>');
        $('.dubup').trigger('click');
    }
}();