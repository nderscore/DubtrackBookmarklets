/* 
 * Youtube Playlist Exporter 
 * By _nderscore
 */
(function loadMore(){
    if(location.pathname.indexOf('/playlist'))
        return alert('This bookmarklet must be run from a playlist page.');

    function log(str){
        _nderImport.value = str;
    }

    /* init */
    if(!window._nderImport){
        _nderImport = document.createElement('textarea');
        _nderImport.style.cssText = 'position: absolute; top: 50%; left: 50%; background: #fff; width: 350px; height: 500px; margin: -250px 0 0 -175px';
        document.body.appendChild(_nderImport);
        log('_nderExport Initialized. \n\nLoading full playlist...');
    }

    /* load more until button is gone */
    var loadBtn = document.querySelector('.load-more-button');
    if(loadBtn){
        loadBtn.click();
        return setTimeout(loadMore, 50);
    }

    /* compile links */
    var links = [].filter.call(document.querySelectorAll('a.pl-video-title-link'), function(el){
        return !/^\s*\[Deleted Video\]\s*$/.test(el.innerHTML);
    }).map(function(el){
        return el.href.match(/.*\?v=([^&]+)/)[1];
    });

    log(links.join('\n'));
})();