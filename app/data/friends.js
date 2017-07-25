// FriendsList array of objects.
let friendsList = [
	{
		// Middle-aged, beer drinking, golfer
		name: 'Carl O\'Shaughnessy',
		photo: './images/carl.jpg',
		surveyResults: ["3", "1", "3", "2", "5", "2", "2", "2", "3", "5"]
	},
	{
		// College girl, likes to date
		name: 'Alicia Sanchez',
		photo: './images/alicia.jpg',
		surveyResults: ["3", "3", "5", "4", "1", "5", "4", "3", "5", "3"]
	},
	{
		// Super hip college dude
		name: 'Joey Jammersky',
		photo: './images/joey.jpg',
		surveyResults: ["1", "2", "3", "5", "4", "5", "5", "4", "4", "5"]
	},
	{
		// Middle-aged woman, home body, likes tea with friends
		name: 'Susan Holmes',
		photo: './images/susan.jpg',
		surveyResults: ["4", "5", "3", "2", "5", "1", "2", "3", "2", "1"]
	},
	{
		// Professional finance guy, all-around jackass
		name: 'Johnny Jackass',
		photo: './images/johnny.jpg',
		surveyResults: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
	}
];

// Compare function to match friends based on cumulative, overall variance.
let compare = (user) => {
	// Baseline setting for unattainable maximum variance, this object be overridden.
	let bestMatch = {matchScore: 50};
	// Iterate through each friend in the friendsList array.
	for (let i = 0; i < friendsList.length; i++) {
		// Reset variance score.
		let variance = 0;
		// Iterate through each surveyResults answer.
		for (let j = 0; j < friendsList[i].surveyResults.length; j++) {
			// Calculate absolute value of difference between individual answers.  Add to total variance.
			variance += Math.abs(user.surveyResults[j] - friendsList[i].surveyResults[j]);
		}
		// Check current variance against bestMatch variance. If lower, overwrite bestMatch object to current friend's values.
		if (variance < bestMatch.matchScore) {
			bestMatch = {
				name: friendsList[i].name,
				photo: friendsList[i].photo,
				surveyResults: friendsList[i].surveyResults,
				matchScore: variance
			};
		}
	}
	return bestMatch;
}

// Exports.
module.exports.friendsList = friendsList;
module.exports.compare = compare;