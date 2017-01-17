var myUserID = 'tempUserID';
var tripLikeIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB7ElEQVRIS7XVS8iNURTG8d9HhDKRgUspKbmEcksYuBRKDCSFFAZkgAwoZUa5xMB1QKKYoFzKBKWIohDFRAYykEvKRAZyaWntOh3nnPc733fsyVt7P3v997vXWs/u8p9HV4P4A7EIE3LtFe7ge512UOrGt9LVA9bjIJ7jSW6cgcnYiQs5twH78SJ1EWc6JqXuYjlMLWA31mEVXtaddgou4yz6Vugu4QyORIwCmIlrmIYPTdIyMk/7C1PxsYluBJ5iKZ4VQFDv4VRFzlcgANcrdFsxC2sL4DPiGt53qKhG4TGGF8BPDMCPDgH64xv6FcA7LMCbDgHG4hZGF8D5SAiOdQiwI0t2YwHMx4mcjCT2ZvRBNOdm3C+A+EZSDme99wawGtswG79rG20e4qomZoJ6Ahmcp1+DB7WNVoJFi3/B9p5Ex0mER4WV/B31XjQk/WULbrYJWY7j2U9fmwFifi6u5vd1NyHjIqEIyKPaPY3sOtY3pSvOwacKyDA8xD6cq9c2A4RuL5ZhYealEWco7uJK6v/RtALE2iEsweIGPhXuejuNb0+UZKMTtAKUIoh3IpomnDRsOEY8LmHvR7N3mt5iFaBsXJlWfiArb1fm6UZVEXQXEHHG4DTCeaMI3lYFb9QH3dnTlqadP2grcBH/AU5hWxnr9PQbAAAAAElFTkSuQmCC";
var tripUnlikeIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACI0lEQVRIS8WVv4sTURDHv7ObRAMiBja2goVySiSgIGhheUaE7OyCgljkRFOKyFmbf+CstEkVVARdsu+J4g9sgr9ATpGA4CF2VwaDQRFF742skJDkYpLz9nDLt983n/nxZoawwR9tsH38H0CxWNxDREUi2mmM+Wbb9jPHce5Wq9Wf3Yh9399rjPEB7ADwmYieO45zv18TaQciKJVKmzudzjUAc8P/jDFLiUSCc7nch2azeQXA+WENEX0EcCoMw8WuIwMAZq4D8MbUZVlE6kR0YYzmC4CDSqn3AxG4rlsgogcxFf2hUurYAICZbwA4HQfAGGMsy9qulPrUSxEzvwWQjwPwx3OiI2EYPu0HLAHYHRfAsqyj9Xr9cQ/ged4LETkUF0BEDmit3/RHUAVwLg6AMWYllUptC4Lgaw/guu4JIrodB4CIXoZheHjgFRUKhU3JZHLZtu3seiEiMqe1rq3qZGa+CGBhPYCom9vt9kyj0fi1ClAul5OtVus1gH3/CBEAs0qpJyNHRXQYDToAryzL2rJWiIgsaK3n+++NHNfMfByAApCYFkJE92zb5iAIViYCIoHneSdF5OY0EGPMo0wmw7Va7fuwQ2MXju/7s8aYOwC2jonkejabPTu8B/5ag2FDzLwLQDCi8D9EZF5rfXVcGqdamVGPpNPpyyJyKUqZiCwS0Rml1LtJNZoK0DXCzDMisj+fz9+qVCpmkvFVfTDNhbVqfgOd+LwZ32+kyQAAAABJRU5ErkJggg==";

var main = function() {
	
	// loading fake data for front end testing

	// var userTripsList = [{tripID: "12345", userID: "123", tripTitle: "test1", username: "user1", description: "this is test description1", liked: true, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12346", userID: "124", tripTitle: "test2", username: "user2", description: "this is test description2", liked:false, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12347", userID: "125", tripTitle: "test3", username: "user3", description: "this is test description3", liked:false, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12348", userID: "126", tripTitle: "test4", username: "user4", description: "this is test description4", liked:true, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12349", userID: "127", tripTitle: "test5", username: "user5", description: "this is test description5", liked:true, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12350", userID: "128", tripTitle: "test6", username: "user6", description: "this is test description6", liked: true, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12351", userID: "129", tripTitle: "test7", username: "user7", description: "this is test description7", liked:false, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12352", userID: "130", tripTitle: "test8", username: "user8", description: "this is test description8", liked:false, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12353", userID: "131", tripTitle: "test9", username: "user9", description: "this is test description9", liked:true, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12354", userID: "132", tripTitle: "test10", username: "user10", description: "this is test description10", liked:true, imageURL:'http://placekitten.com/g/150/150'},];

	// var wishlistTripsList = [{tripID: "12345", userID: "123", tripTitle: "test1", username: "user1", description: "this is test description1", liked: true, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12346", userID: "124", tripTitle: "test2", username: "user2", description: "this is test description2", liked:false, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12347", userID: "125", tripTitle: "test3", username: "user3", description: "this is test description3", liked:false, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12348", userID: "126", tripTitle: "test4", username: "user4", description: "this is test description4", liked:true, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12349", userID: "127", tripTitle: "test5", username: "user5", description: "this is test description5", liked:true, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12350", userID: "128", tripTitle: "test6", username: "user6", description: "this is test description6", liked: true, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12351", userID: "129", tripTitle: "test7", username: "user7", description: "this is test description7", liked:false, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12352", userID: "130", tripTitle: "test8", username: "user8", description: "this is test description8", liked:false, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12353", userID: "131", tripTitle: "test9", username: "user9", description: "this is test description9", liked:true, imageURL:'http://placekitten.com/g/150/150'},
	// {tripID: "12354", userID: "132", tripTitle: "test10", username: "user10", description: "this is test description10", liked:true, imageURL:'http://placekitten.com/g/150/150'},];

	// var fakeData = {userImageURL: 'http://placekitten.com/g/150/150', username: "Cat Meow", userDescription: "this is test user description", userContact: 'test@gmail.com',
	// wishlistTrips: wishlistTripsList, userTrips: userTripsList};

	// var source = $("#hbtemplate").html();
	// var template = Handlebars.compile(source);
	// $('body').append(template(fakeData));

 	$('#trip-index').on('click',function(event){
 		event.preventDefault();
 		$('#trip-index').removeClass('inactive').addClass('active');
 		$('#trip-content').removeClass('inactive').addClass('active');
 		$('#wishlist-index').removeClass('active').addClass('inactive');
 		$('#wishlist-content').removeClass('active').addClass('inactive');
 	});

 	$('#wishlist-index').on('click',function(event){
 	 	event.preventDefault();
 		$('#wishlist-index').removeClass('inactive').addClass('active');
 		$('#wishlist-content').removeClass('inactive').addClass('active');
 		$('#trip-index').removeClass('active').addClass('inactive');
 		$('#trip-content').removeClass('active').addClass('inactive');
 	});

 	$('.trip').on('click',function(event){
	    event.preventDefault();

	    if ($(event.target).attr('class') === 'trip-author') {
	      var userID = $(event.target).attr('rel');
	      console.log(userID +' get req sending');

	      $.ajax({
	        url: '/view_user',
	        method: 'GET',
	        data: {
	          user_id: userID,
	        }
	      }).done(function(response){
	        console.log('user profile should be displayed');
	      });

	    } else {
	        var tripID = $(this).attr('rel');

	        if ($(event.target).attr('class') === 'trip-like') {
	          console.log(tripID+' liked post req');

	          $.ajax({
	            url: '/like_trip',
	            method: 'POST', 
	            data: {
	              trip_id: tripID,
	              user_id: myUserID,
	            }
	          }).done(function(response){
	            console.log('trip should be liked');
	            $(event.target).attr('class','trip-unlike');
            	$(event.target).attr('src',tripUnlikeIcon);
	          });

	        } else if ($(event.target).attr('class') === 'trip-unlike') {
	          console.log(tripID+' unliked post req');

	          // temporarily here until "unlike" route is established
              $(event.target).attr('class','trip-like');
              $(event.target).attr('src',tripLikeIcon);

	          $.ajax({
	            url: '/unlike_trip',
	            method: 'POST', 
	            data: {
	              trip_id: tripID,
	              user_id: myUserID,
	              // how to get my own user ID?
	            }
	          }).done(function(response){
	            console.log('trip should be unliked');
	            // correct place for updating the icon
	            $(event.target).attr('class','trip-like');
            	$(event.target).attr('src',tripLikeIcon);
	          });

	        } else {
	            console.log(tripID+' display');
	            // no re-routing here
	        }
	    }
	});
}

 $(document).ready(main);