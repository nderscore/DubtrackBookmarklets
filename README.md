# DubtrackBookmarklets
Assorted bookmarklets for Dubtrack.fm


# Autodub

Automatically upvotes tracks 30-60 seconds after they play on a randomized timer. Won't over-ride your downvotes. Run the bookmarklet again to disable/re-enable autodub.

    javascript:~function(){$.getScript('//cdn.rawgit.com/nderscore/DubtrackBookmarklets/master/autodub.js')}();
    
# Youtube Playlist Exporter

Run this bookmark while on any youtube playlist page. It will generate a list of video ID's for use with the importer.

    javascript:~function(){var s = document.createElement('script'); s.src = '//cdn.rawgit.com/nderscore/DubtrackBookmarklets/master/nderExport.js'; document.head.appendChild(s); }();

# Youtube Playlist Importer

Run this bookmark while on any dubtrack playlist page. Paste in your list of youtube video ID's and it will add them all to your Dubtrack playlist. It takes a while, so be patient :)

    javascript:~function(){$.getScript('//cdn.rawgit.com/nderscore/DubtrackBookmarklets/master/nderImport.js')}();