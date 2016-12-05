;(function() {
  setInterval(JKMagic, 1000);
  var uidRegex = /id=\d+/;
  var highlightColor = '#fbbd9e';
  function JKMagic() {
    [].forEach.call(document.querySelectorAll('.WB_cardwrap.WB_feed_type'), function(elem1) {
      var uidMatches = elem1.querySelector('.WB_feed_detail [usercard]').getAttribute('usercard').match(uidRegex);
      if (!uidMatches) return;
      var uid = uidMatches[0];
      [].forEach.call(elem1.querySelectorAll('[node-type="root_comment"]'), function(elem2) {
        var commentUidMatches = elem2.querySelector('[usercard]').getAttribute('usercard').match(uidRegex);
        if (commentUidMatches && (commentUidMatches[0] === uid)) {
          elem2.style.background = highlightColor;
        }
        var nestedComments = elem2.querySelectorAll('[node-type="child_comment"] [comment_id]');
        if (!nestedComments.length) return;
        [].forEach.call(nestedComments, function(elem3) {
          var nestedUidMatches = elem3.querySelector('[usercard]').getAttribute('usercard').match(uidRegex);
          if (nestedUidMatches && (nestedUidMatches[0] === uid)) {
            elem3.style.background = highlightColor;
          }
        });
      });
    });
  }
})();
