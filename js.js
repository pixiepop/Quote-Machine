$(document).ready(function () { //always goes at top of jquery doc

			var quote = '';
			var author = '';

			function getNewQuote() { //create function to call api

				// Color Shiz
				var colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
				'lime', 'orange', 'purple', 'red', 'silver', 'teal', 'HotPink', 'Turquoise'];
	            var color = colors[Math.floor(Math.random() * colors.length)];
				$('.outer-container').css('background-color', color);
				$(".fa-quote-left").css('color',color);
				$('.icons').css('background', color);
				
				$.ajax({ // $.ajax - basically means make an api request

					url: 'http://api.forismatic.com/api/1.0/', //this is the basic part of the url
					jsonp: 'jsonp', //jsonp bypasses an error (not always used)
					dataType: 'jsonp', //again bypassing an error
					data: {
						method: 'getQuote', // these are parameters of the url as stated in the api instructions
						format: 'jsonp',
						lang: 'en' // full url looks like: https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en
					},

					//success tells what to do with ajax call

					success: function (response) {
						// response is whats recieves form api
						quote = response.quoteText; // this is where quote is stored in api
						author = response.quoteAuthor; //authors name in api

						if (quote) {
							$('#text').text(quote); //#quote is an id in html
						}

						if (author) {
							$('#author').text('Said by ' + author); //#author id in html
						} else {
							$('#author').text('Unknown');
						}

					}

				});
			}
			getNewQuote();

			// make new quote button refresh the page				  

			$('#new-quote').click(function () {  //refresh is the button name in html
				getNewQuote();
			});
			
	
	$(".twitter-share-button").on("click",function(e) {
	//alert("click");
	e.preventDefault();
	var link = $(this).attr("href");
	var thequote = $("#author").html();
	var fullQuote = $('#text').html() + ' - ' + thequote;
	var encoded = encodeURIComponent(fullQuote);
	window.location.href = link+'?text='+encoded;
	
	
});

});


