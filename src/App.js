import React, { useState } from "react";
import './styles.css';

var foods = {
	"🥗": "Salad",
	"🧁": "Cupcake",
	"🌭": "Hotdog",
	"🍝": "Pasta",
	"🍣": "Sushi",

};
var fruits={
    "🍇": "Grapes",
	"🍉": "Watermelon",
	"🍌": "Banana",
	"🍎": "Apple",
	"🥭": "Mango",
};
var animals = {
	"🐬": "Dolphin",
	"🐙": "Octopus",
	"🦢": "Swan",
	"🦉": "Owl",
	"🦒": "Giraffe",
};

var posts = {
	"🧑‍💻": "Programmer",
	"🧚‍": "Fairy",
	"👩‍🍳": "Chef",
	"🦸": "Superman",
	"🕵️": "Detective",
};

var gifts = {

	"🏀": "Basketball",
	"🧸": "Teddy Bear",
	"🎁": "Gift",
	"🎄": "Christmas Tree",
	"👗": "Dress"
};

var foodKeys = Object.keys(foods);
var fruitsKeys = Object.keys(fruits);
var animalsKeys = Object.keys(animals);
var postKeys = Object.keys(posts);
var giftKeys = Object.keys(gifts);
export default function App() {
	const [userInputMeaning, emojiMeaning] = useState("");

	function emojiInput(e) {
		var Input1 = e.target.value;
		var Input2 = e.target.value;
		var Input3 = e.target.value;
		var Input4 = e.target.value;
		var Input5 = e.target.value;
		var meaning1 = animals[Input1];
		var meaning2 = foods[Input2];
		var meaning3 = posts[Input3];
		var meaning4 = gifts[Input4];
		var meaning5 = gifts[Input5];

		if (meaning1 === undefined && meaning2 === undefined && meaning3 === undefined && meaning4 === undefined && meaning5 === undefined ) {
			meaning1 = "Not Found in Database";
			meaning2 = "Not Found in Database";
			meaning3 = "Not Found in Database";
			meaning4 = "Not Found in Database";
			meaning5 = "Not Found in Database";
			emojiMeaning(meaning1);
		}else if(meaning1 === undefined && meaning2 === undefined && meaning3 === undefined && meaning4 === undefined){
			meaning1 = "Not Found in Database";
			meaning2 = "Not Found in Database";
			meaning3 = "Not Found in Database";
			meaning4 = "Not Found in Database";
			emojiMeaning(meaning4);
		}else if(meaning2 === undefined && meaning3 === undefined && meaning4 === undefined && meaning5 === undefined){
			meaning3 = "Not Found in Database";
			meaning2 = "Not Found in Database";
			meaning4 = "Not Found in Database";
			meaning5 = "Not Found in Database";
			emojiMeaning(meaning1);
		}else if(meaning1 === undefined && meaning3 === undefined && meaning4 === undefined && meaning5 === undefined){
			meaning1 = "Not Found in Database";
			meaning3 = "Not Found in Database";
			meaning4 = "Not Found in Database";
			meaning5 = "Not Found in Database";
			emojiMeaning(meaning2);
		}else if(meaning1 === undefined && meaning2 === undefined && meaning4 === undefined && meaning5 === undefined){
			meaning1 = "Not Found in Database";
			meaning2 = "Not Found in Database";
			meaning4 = "Not Found in Database";
			meaning5 = "Not Found in Database";
			emojiMeaning(meaning3);
		}
		else if(meaning1 === undefined && meaning2 === undefined && meaning3 === undefined && meaning4 === undefined){
			meaning1 = "Not Found in Database";
			meaning2 = "Not Found in Database";
			meaning3 = "Not Found in Database";
			meaning4 = "Not Found in Database";
			emojiMeaning(meaning5);
		}

	}

	function emojiClickHandlerAnimal(emoji) {
		var meaning1 = animals[emoji];
		emojiMeaning(meaning1);
	}
	function emojiClickHandlerFood(emoji) {
		var meaning2 = foods[emoji];
		emojiMeaning(meaning2);
	}

	function emojiClickHandlerPost(emoji) {
		var meaning3 = posts[emoji];
		emojiMeaning(meaning3);
	}

	function emojiClickHandlerGift(emoji) {
		var meaning4 = gifts[emoji];
		emojiMeaning(meaning4);
	}

	function emojiClickHandlerFruits(emoji) {
		var meaning5 = fruits[emoji];
		emojiMeaning(meaning5);
	}

	return (
		<div className="App">
		<nav class = "navigation">
			<h1><b>EMOJI INTERPRETING APP </b></h1>
		</nav>
		<div class = "mid">
			{/* <h2> Enter Emoji of your choice... </h2>
			<input onChange={emojiInput} /> */}
			{/* <h3> or </h3> */}
			<h3>Click to know what these emojis mean...
			</h3>
			<h2>{userInputMeaning}</h2>
		</div>
			<div class = "outer-div">
			<div class= "inner-div">
			{foodKeys.map(function (keys) {
				return (
					<span> <li onClick={() => emojiClickHandlerFood(keys)}>{keys}  </li></span>
				);
			})}
			</div>
			<div class = "inner-div">
			{animalsKeys.map(function (keys) {
				return (
					<span><li onClick={() => emojiClickHandlerAnimal(keys)}>{keys}</li></span>
				);
			})}
			</div>
			<div class= "inner-div">
			{postKeys.map(function (keys) {
				return (
					<span> <li onClick={() => emojiClickHandlerPost(keys)}>{keys}  </li></span>
				);
			})}
			</div>
			<div class= "inner-div">
			{fruitsKeys.map(function (keys) {
				return (
					<span> <li onClick={() => emojiClickHandlerFruits(keys)}>{keys}  </li></span>
				);
			})}
			</div>
			<div class= "inner-div">
			{giftKeys.map(function (keys) {
				return (
					<span> <li onClick={() => emojiClickHandlerGift(keys)}>{keys}  </li></span>
				);
			})}
			</div>
			</div>
		</div>
	);
}
