function Game() {

	const target = document.querySelector("#game_screen")

	// Constructor
	function Character (name, image) {
		return {
			name: name,
			image: `img/characters/${image}`
		}
	}

	var p1 = new Character("Ana","ana.png")
	var p2 = new Character("Jonas","")
	var p3 = new Character("Rita","rita.png")
	var p4 = new Character("Cesar","")
	var p5 = new Character("Wendy","wendy.png")
	var p6 = new Character("Diego","")
	var p7 = new Character("Gabi","gabi.png")
	var p8 = new Character("Pedro","")
	var p9 = new Character("Babi","babi.png")
	var p10 = new Character("Carlos","")
	var p11 = new Character("Tally","tally.png")
	var p12 = new Character("Andrew","")
	var p13 = new Character("Betty","betty.png")
	var p14 = new Character("Sharon","sharon.png")
	var p15 = new Character("Irwin","")
	var p16 = new Character("Fernanda","fernanda.png")
	
	const characters = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12,
	p13, p14, p15, p16]
	
	// function shuffle(arr) {
		// 	return arr.sort(()=> Math.random() - 0.5)
		// }
		// let shuffled = shuffle(toShuffle)
		
	let toShuffle = characters
	let shuffled = toShuffle.sort(()=> Math.random() - 0.5)

	// Shuffle Array
	// for(let i = characters.length; i > 0; i--){
	// 	let randNum = Math.round(Math.random()*toShuffle.length)
	// 	shuffled.push(toShuffle[randNum])
	// 	toShuffle.splice[randNum, 1]
	// }


	console.log(shuffled)

	function render () {
		
		shuffled.forEach((character) => {
			target.innerHTML += `
				<div class="cell" onclick="game.toggleView(this)">
					<div class="name">
						${character.name}
					</div>
					<div class="image">
						<img src="${character.image}" alt="">
					</div>
				</div>
			`
		})
	}

	function toggleView(e) {
		e.classList.toggle("disabled")
	}

	return {
		render,
		toggleView
	}
}

const game = new Game()
game.render()

// Viewer
function viewHelper() {
	let viewer = document.createElement('p')
	viewer.style.background = "orange"
	viewer.style.position = "fixed"
	viewer.style.top = "0px"
	viewer.style.right = "0px"
	viewer.style.padding = "12px"
	viewer.innerText = document.body.clientWidth+"px"
	
	window.addEventListener("resize", (evt) => {
		viewer.innerText = document.body.clientWidth+"px"
	})

	document.body.append(viewer)
}
viewHelper()