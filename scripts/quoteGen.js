var quotes = [
  '"We are what we repeatedly do. Excellence then, is not an act, but a habit." – Aristotle',
  '"Don\'t do they. Do you." - Russell Westbrook',
  '"Sit up straight. Whether male or female, do deadlifts, bench press, muscle-ups, and 400m sprints 3-4 times a week for about 45 minutes. Progressively increase loads. If you feel injured, stop doing that for a while. Eat lean meats, healthy oils, nuts, legumes, and a ton of vegetables. Avoid white starches, sugar in any form, and sodas like the plague. Drink lots of water. Get some sleep. Take cold showers. Stop being afraid of things." - Goodreads 4-Hour Body Review',
  '"I have no special talents. I am only passionately curious." - Albert Einstein',
  '"Do what you can, with what you have, where you are." - Theodore Roosevelt',
  '"The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function." - F. Scott Fitzgerald',
  '"All I want to know is where I\'m going to die and I\'ll never go there" - Charlie Munger',
  '"If I have seen further it is by standing on ye sholders of Giants." - Isaac Newton',
  '"I\'d Rather Be Optimistic and Wrong, Than Be Pessimistic and Right." - Elon Musk',
]

var quote_index = Math.floor(Math.random() * quotes.length);
var result = "<p>" + quotes[quote_index] + "</p>";
console.log(result);
document.getElementById('quoteDisplay').innerHTML = result;

function newQuote() {
  document.location.reload();
}
