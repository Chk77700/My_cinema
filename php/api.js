$(document).ready( function(){
	console.log("test")

	var tab = $(".api").get()
	// for(var i = 0; i < tab.length; i++)
	// {
		var nom = $(tab[0]).attr("value")
		console.log(nom)
		$.getJSON("http://www.omdbapi.com/?apikey=ad8637ae&s="+nom, function(data)
		{
			if(data.Search[0].Poster !== undefined)
			{
				console.log("#"+nom)
				$(tab[0]).attr("src", data.Search[0].Poster)
					console.log(data.Search[0].Poster)
			}
		})
			var nom = $(tab[1]).attr("value")
		console.log(nom)
		$.getJSON("http://www.omdbapi.com/?apikey=ad8637ae&s="+nom, function(data)
		{
			if(data.Search[0].Poster !== undefined)
			{
				console.log("#"+nom)
				$(tab[1]).attr("src", data.Search[0].Poster)
					console.log(data.Search[0].Poster)
			}
		})
				var nom = $(tab[2]).attr("value")
		console.log(nom)
		$.getJSON("http://www.omdbapi.com/?apikey=ad8637ae&s="+nom, function(data)
		{
			if(data.Search[0].Poster !== undefined)
			{
				console.log("#"+nom)
				$(tab[2]).attr("src", data.Search[0].Poster)
					console.log(data.Search[0].Poster)
			}
		})
				var nom = $(tab[3]).attr("value")
		console.log(nom)
		$.getJSON("http://www.omdbapi.com/?apikey=ad8637ae&s="+nom, function(data)
		{
			if(data.Search[0].Poster !== undefined)
			{
				console.log("#"+nom)
				$(tab[3]).attr("src", data.Search[0].Poster)
					console.log(data.Search[0].Poster)
			}
		})
				var nom = $(tab[4]).attr("value")
		console.log(nom)
		$.getJSON("http://www.omdbapi.com/?apikey=ad8637ae&s="+nom, function(data)
		{
			if(data.Search[0].Poster !== undefined)
			{
				console.log("#"+nom)
				$(tab[4]).attr("src", data.Search[0].Poster)
					console.log(data.Search[0].Poster)
			}
		})
	// }
})