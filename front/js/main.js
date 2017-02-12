var data;

$.getJSON('results.json',function(resp,err){
	data = resp;
	init();
})

function init(){
	$('button').on('click',function(e){
		var randomNumber = Math.round(Math.random() * (data.length-1))
		var randomMeme = data[randomNumber];

		var isVideo = randomMeme.video ? true : false

		$('#memecontainer p').html(randomMeme.title);
		$('#memecontainer img').attr('src','');
		$('#memecontainer video').attr('src','');


		if(isVideo){
			$('#memecontainer video').attr('style','position:relative')
			$('#memecontainer video').attr('src',randomMeme.video);
		}else{
			$('#memecontainer video').attr('style','position:absolute')
			$('#memecontainer img').attr('src',randomMeme.image);
		}
		
	})
}