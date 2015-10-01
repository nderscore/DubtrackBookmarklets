/* 
 * Dubtrack Youtube Importer
 * By _nderscore
 */
(function(){
    var playlistID = (location.pathname.match(/^\/browser\/user\/([a-f0-9]+)/)||[0,0])[1];
    if(!playlistID)
        return alert('You must be viewing a dubtrack playlist.');

    if(window._nderImport)
        return alert('Already running');

    var list = prompt('Paste your list of video codes here please.');

    if(!list)
        return "No links to add.";

    list = list.match(/\S{11}/g);

    var size = list.length;

    alert('This might take a while... so be patient.');

    window._nderImport = true;

    var errorCount = 0;
    var done = 0;
    var notDone = 0;
    (function loop(){
        if(list.length){
            var id = list.shift();
            $.ajax({
                url: 'https://api.dubtrack.fm/playlist/' + playlistID + '/songs',
                method: 'POST',
                data: {
                    fkid: id,
                    type: 'youtube'
                },
                success: function(){
                    done++;
                    setTimeout(loop, 50);
                },
                error: function(){
                    notDone++;
                    setTimeout(loop, 50);
                }
            })
        } else {
            alert('Import Completed! Imported ' + size + ' songs successfully. ' + notDone + ' failed to upload.');
            window._nderImport = null;
        }
    })();
})();