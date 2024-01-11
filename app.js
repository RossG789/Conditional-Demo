let age = 15;
let movieRating = 18;

if (age > 17) {
  console.log("Enjoy the film");
} else if (age === 17) {
  if (movieRating === "PG") console.log("You can watch the movie!");
} else if (age < 17) {
  if (movieRating === 18) console.log("You are too young to watch this film!");
}
