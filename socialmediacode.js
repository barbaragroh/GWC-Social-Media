/**
 * Created by jeffstern on 7/9/14.
 * Modified by Barbara Groh on 6/23/15.
 */


// This is the new way of creating JavaScript classes. It's not really a function.
function Location(title, instagram, year) {
    this.title = title;
	this.instagram = instagram;
    this.year = year;

}

// A list of all 14 Pixar movies.
var locations = [
    // Each of these lines of code makes a new Movie object from the movie class
    new Location("Miami: Verizon Terremark", "gwc_verizon", 2014),
    new Location("Miami: FIU", "gwc.fiu", 2015),
    new Location("Seattle: Amazon", "gwcamazon", 2014),
	new Location("Bay Area: Intel", "gwcintel", 2014),
	new Location("San Jose: eBay's Front Porch", "gwcfrontporch", 2015),
	new Location("Bay Area: General Electric", "gwc_ge", 2014),
	new Location("San Jose: eBay", "gwc_swagjose", 2014),
	new Location("Seattle: Microsoft", "gwcmicrosoft", 2014),
	new Location("Bay Area: Square", "gwcsquared", 2014),
	new Location("Bay Area: Facebook", "gwcfacebook", 2014),
	new Location("NYC: AT&T", "gwc_att", 2014),
	new Location("San Jose: Adobe", "gwc_adobe", 2014),
	new Location("NYC: AppNexus", "gwcappnexus", 2014),
	new Location("Chicago", "girlswhocodechicago", 2015),
	new Location("Massachusetts", "girlswhocodemassachusetts", 2015),
	new Location("Washington D.C.", "girlswhocodedc", 2015),
	new Location("New Jersey", "girlswhocodenj", 2015),
	new Location("Seattle: Microsoft", "gwc_microsoftseattle", 2015),
	new Location("Miami: Miami-Dade College", "girlswhocode_mdc", 2015),
	new Location("Microsoft", "microsoftmv_gwc", 2015),
	new Location("LA: Google", "gwc_googlela", 2015),
	new Location("Bay Area: Electronic Arts", "gwc_ea", 2015),
	new Location("NYC: Cambio", "cambiogwc", 2014),
	new Location("Bay Area: San Francisco", "gwc_techwarriors", 2015),
	new Location("Bay Area", "girlswhocode.bayarea", 2015),
	new Location("NYC", "girlswhocodenyc", 2015),
	new Location("Seattle", "girlswhocodeseattle", 2015),
	new Location("LA", "girlswhocodela", 2015),
	new Location("Boutique", "gwcboutique", 2015),
	new Location("Miami", "girlswhocodemia", 2015),
	new Location("Bay Area: San Ramon", "gwcsanramon", 2015)


]

/* showMoives
    Populates the movies div with each individual movie
    Input: An array of Movie objects
 */
function showLocation(locations) {
    $(" #locations ").empty(); // A jQuery method which clears the movies div
    for (var i = 0; i < locations.length; i++) {

        if(i%3==0) {
            $(" #locations ").append("<div class='row'></div>"); // A jQuery method to add a new row for every 3rd movie
        }

        // This string is the HTML that makes up each individual movie cell,
        // It uses movie[i] attributes so that each cell has unique information
        var locationHTML = "<div class='col-md-4 location'>" +
            "<a href='http://instagram.com/"+locations[i].instagram+"'><h3 class='locationname' style='color:#555555;'>" + locations[i].title + " (" + locations[i].year + ")</h3>" +
            "<p class='instagram' style='color:#555555;'>" +"@"+ locations[i].instagram + "</p></a>" +
			"<iframe src='http://widget.websta.me/in/" + locations[i].instagram + "/?s=200&w=2&h=3&b=0&p=10' allowtransparency='true' frameborder='0' scrolling='no' style='border:none;overflow:hidden;width:420px; height: 630px' ></iframe>";
        $(" #locations .row:last-child").append(locationHTML); // A jQuery method that adds the new HTML string to the last row in the movies div

        if(i%3==2) { $(" #locations ").append("</div>"); }

    }
}

/* sortButtonClicked
    Calls appropriate sort method based on which link was clicked and
        repopulates movie grid.
    Input: String representing which button was clicked on

 */
function sortButtonClicked(link) {
    if (link === "date") {
        sortLocationsByYear(locations);
    }
    else if (link == "title") {
        sortLocationsByTitle(locations);
    }
    else if(link == "shuffle") {
        shuffle(locations);
    }
    showLocation(locations);
}

/* shuffle
   Input: Array
   Output: Shuffled array
   Function courtesy of http://jsfromhell.com/array/shuffle
 */
function shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

/* sortMoviesByYear
 You must implement a basic bubble sort algorithm to sort
 the movies based on it's year attribute.

    Input: a list of Movie objects.
    Output: Returns a list of Movie objects after they have been sorted by year.
*/
function sortLocationsByYear(locations) {
	for (var i = 0; i < locations.length; i++) {
		console.log(locations[i].year)
	}
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < locations.length-1; i++) {
            if (locations[i].year < locations[i+1].year) {
                var temp = locations[i];
                locations[i] = locations[i+1];
                locations[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
	for (var i = 0; i < locations.length; i++) {
		console.log(locations[i].year);
		console.log(locations[i].title);
	}
    return locations;
}

/* sortMoviesByTitle
 You must implement a basic bubble sort algorithm to sort
 the movies based on it's title attribute.

  Input: a list of Movie objects.
  Output: returns a list of Movie objects after they have been sorted by title.
 */
function sortLocationsByTitle(locations) {
	for (var i = 0; i < locations.length; i++) {
		console.log(locations[i].title);
	}
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < locations.length-1; i++) {
            if (locations[i].title > locations[i+1].title) {
                var temp = locations[i];
                locations[i] = locations[i+1];
                locations[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
	for (var i = 0; i < locations.length; i++) {
		console.log(locations[i].title);
		console.log(locations[i].year);
	}
    return locations;
}

// Code that gets run once the page has loaded. It also uses jQuery.
$(document).ready(function () {
	sortLocationsByTitle(locations);
    sortLocationsByYear(locations);
    showLocation(locations);
});
