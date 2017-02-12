var Xray = require('x-ray');
var x = Xray();

x('http://9gag.com/u/manolyaderya/likes', '.badge-entry-collection article', [{
  title: '.badge-item-title a',
  video: '.badge-post-container video source@src',
  image: '.badge-post-container .badge-item-img@src'
}])
  .paginate('.loading a@href')
  .limit(300)
  .write('results.json')