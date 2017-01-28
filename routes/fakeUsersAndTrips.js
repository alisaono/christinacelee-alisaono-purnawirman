// the fake users and trips consists of 3 users (userA, userB, userC) 
// 3 locations (NY, cambridge, seattle) with valid location id
// and 6 trips created (newYorkTestA, newYorkTestB, cambridgeTestA, etc.)
var mongoose = require('mongoose');
var newYorkTestAID = new mongoose.Types.ObjectId;
var newYorkTestBID = new mongoose.Types.ObjectId;
var cambridgeTestAID = new mongoose.Types.ObjectId;
var cambridgeTestBID = new mongoose.Types.ObjectId;
var seattleTestAID = new mongoose.Types.ObjectId;
var seattleTestBID = new mongoose.Types.ObjectId;
var alisaTripAID = new mongoose.Types.ObjectId;
var purnaTripAID = new mongoose.Types.ObjectId;
var christinaTripAID = new mongoose.Types.ObjectId;

var users = [
			{"userID": "userA",
			 "userName": "userA",
			 "userEmail": "",
			 "userPhoto": "http://placekitten.com/g/200/200",
			 "userDescription": "This is a fake user A",
			 "userActive": true,
			 "userDestinations": ["ChIJOwg_06VPwokRYv534QaPC8g", "ChIJX8wwy6Vw44kRh2xoiWSOOsU", "ChIJVTPokywQkFQRmtVEaUZlJRA"], 
			 "userLikedTrips": [newYorkTestAID, newYorkTestBID, cambridgeTestAID, cambridgeTestBID, seattleTestAID, seattleTestBID],
			 "userCreatedTrips": [newYorkTestAID, cambridgeTestBID, seattleTestBID]
			},
			 {"userID": "userB",
			 "userName": "userB",
			 "userEmail": "",
			 "userPhoto": "http://placekitten.com/g/200/201",
			 "userDescription": "This is a fake user B",
			 "userActive": true,
			 "userDestinations": ["ChIJOwg_06VPwokRYv534QaPC8g"], 
			 "userLikedTrips": [newYorkTestAID, newYorkTestBID],
			 "userCreatedTrips": [newYorkTestBID]
			},
			{"userID": "userC",
			 "userName": "userC",
			 "userEmail": "",
			 "userPhoto": "http://placekitten.com/g/200/202",
			 "userDescription": "This is a fake user C",
			 "userActive": true,
			 "userDestinations": ["ChIJOwg_06VPwokRYv534QaPC8g", "ChIJX8wwy6Vw44kRh2xoiWSOOsU", "ChIJVTPokywQkFQRmtVEaUZlJRA"], 
			 "userLikedTrips": [newYorkTestAID, cambridgeTestAID, cambridgeTestBID, seattleTestAID, seattleTestBID],
			 "userCreatedTrips": [cambridgeTestAID, seattleTestAID]
			},
			{"userID": "664614793719454",
			 "userName": "Alisa Ono",
			 "userEmail": "alisao (at) mit (dot) edu",
			 "userPhoto": "http://res.cloudinary.com/tabibuddy/image/upload/c_thumb,g_face,h_300,w_300/v1485470184/664614793719454.jpg",
			 "userDescription": "Hi I'm Alisa, creator of tabibuddy!",
			 "userActive": true,
			 "userDestinations": ["ChIJmUQ05l2AHWARyJIoB3SpKPE"], 
			 "userLikedTrips": [alisaTripAID],
			 "userCreatedTrips": [alisaTripAID]
			},
			{"userID": "10158044489410487",
			 "userName": "Purnawirman Huang",
			 "userEmail": "nn@gmail.com",
			 "userPhoto": "http://res.cloudinary.com/tabibuddy/image/upload/c_thumb,g_face,h_300,w_300/v1485326790/10158044489410487.jpg",
			 "userDescription": "I'm the first user of tabibuddy, yay!",
			 "userActive": true,
			 "userDestinations": ["ChIJOSmpLuR5j4AR0u9gOcikHdo"], 
			 "userLikedTrips": [purnaTripAID],
			 "userCreatedTrips": [purnaTripAID]
			},
			{"userID": "10155769496177729",
			 "userName": "Christina Lee",
			 "userEmail": "",
			 "userPhoto": "http://res.cloudinary.com/tabibuddy/image/upload/c_thumb,g_face,h_200,w_200/v1485053998/125.jpg",
			 "userDescription": "",
			 "userActive": true,
			 "userDestinations": ["ChIJNc0j6G3raDURpwhxJHTL2DU"], 
			 "userLikedTrips": [christinaTripAID],
			 "userCreatedTrips": [christinaTripAID]
			},
			]


var trips = [
			{
			  "tripID": newYorkTestAID,
			  "tripName": "newYorkTestA",
			  "tripCreatorID": "userA",
			  "tripCreatorName": "userA",
			  "tripDestinationID": "ChIJOwg_06VPwokRYv534QaPC8g",
			  "tripDestinationName": "New York, NY, USA",
			  "tripType": "Food",
			  "tripActive": true,
			  "tripPhoto": "http://placekitten.com/g/200/204",
			  "tripDescription": "This is a test trip for new york A",
			  "tripLikedUsers": ["userA", "userB", "userC"],
			  "tripSeason": "Spring",
			  "tripDuration": 3,
			  "tripBudget": 200,
			},
			{
			  "tripID": newYorkTestBID,
			  "tripName": "newYorkTestB",
			  "tripCreatorID": "userB",
			  "tripCreatorName": "userB",
			  "tripDestinationID": "ChIJOwg_06VPwokRYv534QaPC8g",
			  "tripDestinationName": "New York, NY, USA",
			  "tripType": "Food",
			  "tripActive": true,
			  "tripPhoto": "http://placekitten.com/g/200/205",
			  "tripDescription": "This is a test trip for new york B",
			  "tripLikedUsers": ["userA", "userB"],
			  "tripSeason": "Winter",
			  "tripDuration": 1,
			  "tripBudget": 50,
			},
			{
			  "tripID": cambridgeTestAID,
			  "tripName": "cambridgeTestA",
			  "tripCreatorID": "userC",
			  "tripCreatorName": "userC",
			  "tripDestinationID": "ChIJX8wwy6Vw44kRh2xoiWSOOsU",
			  "tripDestinationName": "Cambridge, MA, USA",
			  "tripType": "History",
			  "tripActive": true,
			  "tripPhoto": "http://placekitten.com/g/200/206",
			  "tripDescription": "This is a test trip for cambridge A",
			  "tripLikedUsers": ["userA", "userC"],
			  "tripSeason": "Fall",
			  "tripDuration": 4,
			  "tripBudget": 150,
			},
			{
			  "tripID": cambridgeTestBID,
			  "tripName": "cambridgeTestB",
			  "tripCreatorID": "userA",
			  "tripCreatorName": "userA",
			  "tripDestinationID": "ChIJX8wwy6Vw44kRh2xoiWSOOsU",
			  "tripDestinationName": "Cambridge, MA, USA",
			  "tripType": "Food",
			  "tripActive": true,
			  "tripPhoto": "http://placekitten.com/g/200/207",
			  "tripDescription": "This is a test trip for cambridge B",
			  "tripLikedUsers": ["userA", "userC"],
			  "tripSeason": "Spring",
			  "tripDuration": 8,
			  "tripBudget": 10000,
			},
			{
			  "tripID": seattleTestAID,
			  "tripName": "seattleTestA",
			  "tripCreatorID": "userC",
			  "tripCreatorName": "userC",
			  "tripDestinationID": "ChIJVTPokywQkFQRmtVEaUZlJRA",
			  "tripDestinationName": "Seattle, WA, USA",
			  "tripType": "Food",
			  "tripActive": true,
			  "tripPhoto": "http://placekitten.com/g/200/208",
			  "tripDescription": "This is a test trip for seattle A",
			  "tripLikedUsers": ["userA", "userC"],
			  "tripSeason": "Summer",
			  "tripDuration": 3,
			  "tripBudget": 650,
			},
			{
			  "tripID": seattleTestBID,
			  "tripName": "seattleTestB",
			  "tripCreatorID": "userA",
			  "tripCreatorName": "userA",
			  "tripDestinationID": "ChIJVTPokywQkFQRmtVEaUZlJRA",
			  "tripDestinationName": "Seattle, WA, USA",
			  "tripType": "Food",
			  "tripActive": true,
			  "tripPhoto": "http://placekitten.com/g/200/209",
			  "tripDescription": "This is a test trip for seattle B",
			  "tripLikedUsers": ["userA", "userC"],
			  "tripSeason": "Spring",
			  "tripDuration": 9,
			  "tripBudget": 10,
			},			
			{ 
			  "tripID": alisaTripAID, 
			  "tripName": "Snow Cat", 
			  "tripCreatorID": "664614793719454", 
			  "tripCreatorName": "Alisa Ono", 
			  "tripDestinationID": "ChIJmUQ05l2AHWARyJIoB3SpKPE", 
			  "tripDestinationName": "Nagano, Nagano Prefecture, Japan", 
			  "tripType": "Adventure", 
			  "tripActive": true,
			  "tripPhoto": "https://res.cloudinary.com/tabibuddy/image/upload/c_thumb,g_auto,h_500,w_500/v1485308652/588802e3bfda072fb896bfba.jpg", 
			  "tripDescription": "Snow cat witnessed in Nagano, Japan. You can only find them on a cold, snowy day.", 
			  "tripLikedUsers": [ "664614793719454" ], 
			  "tripSeason": "Winter", 
			  "tripBudget": 0, 
			  "tripDuration": 1, 
			},
			{ 
			  "tripID": purnaTripAID, 
			  "tripName": "Dont try this at home!", 
			  "tripCreatorID": "10158044489410487", 
			  "tripCreatorName": "Purnawirman Huang", 
			  "tripDestinationID": "ChIJOSmpLuR5j4AR0u9gOcikHdo", 
			  "tripDestinationName": "San Bruno, CA, USA", 
			  "tripType": "Adventure",
			  "tripActive": true  
			  "tripPhoto": "https://res.cloudinary.com/tabibuddy/image/upload/c_thumb,g_auto,h_500,w_500/v1485327112/58884b0824be4c2bb0ff700f.jpg", 
			  "tripDescription": "On a long trip on pacific highway, we discovered the forbidden forest.", 
			  "tripLikedUsers": [ "10158044489410487" ], 
			  "tripSeason": "Summer", 
			  "tripBudget": 100, 
			  "tripDuration": 1, 
			},
			{ 
			  "tripID": christinaTripAID, 
			  "tripName": "Pie store 'Pie-o-lin'", 
			  "tripCreatorID": "10155769496177729", 
			  "tripCreatorName": "Christina Lee", 
			  "tripDestinationID": "ChIJNc0j6G3raDURpwhxJHTL2DU", 
			  "tripDestinationName": "Busan, South Korea", 
			  "tripType": "Food", 
			  "tripActive": true 
			  "tripPhoto": "https://res.cloudinary.com/tabibuddy/image/upload/c_thumb,g_auto,h_500,w_500/v1485307986/58880052bfda072fb896bfb7.jpg", 
			  "tripDescription": "Great pie store in Busan! Name is 'Pie-o-lin', as in it rhymes with 'violin' haha XD Their pecan pies and espresso are amazingggg <3", 
			  "tripLikedUsers": [ "10155769496177729" ], 
			  "tripSeason": "Fall", 
			  "tripBudget": 10, 
			  "tripDuration": 10, 
			},
			]


var destinations = [{
					"destinationID": "ChIJOwg_06VPwokRYv534QaPC8g",
					"destinationName": "New York, NY, USA",
					"tabies": [newYorkTestAID, newYorkTestBID],
					"buddies": ["userA", "userB", "userC"],
					},
					{
					"destinationID": "ChIJX8wwy6Vw44kRh2xoiWSOOsU",
					"destinationName": "Cambridge, MA, USA",
					"tabies": [cambridgeTestAID, cambridgeTestBID],
					"buddies": ["userA", "userC"],
					},
					{
					"destinationID": "ChIJVTPokywQkFQRmtVEaUZlJRA",
					"destinationName": "Seattle, WA, USA",
					"tabies": [seattleTestAID, seattleTestBID],
					"buddies": ["userA", "userC"],
					},
					{
					"destinationID": "ChIJmUQ05l2AHWARyJIoB3SpKPE",
					"destinationName": "Nagano, Nagano Prefecture, Japan",
					"tabies": [alisaTripAID],
					"buddies": ["664614793719454"],
					},
					{
					"destinationID": "ChIJVTPokywQkFQRmtVEaUZlJRA",
					"destinationName": "San Bruno, CA, USA",
					"tabies": [purnaTripAID],
					"buddies": ["10158044489410487"],
					},
					{
					"destinationID": "ChIJNc0j6G3raDURpwhxJHTL2DU",
					"destinationName": "Busan, South Korea",
					"tabies": [christinaTripAID],
					"buddies": ["10155769496177729"],
					},]


module.exports = {
	users: users,
	trips: trips,
	destinations: destinations
}