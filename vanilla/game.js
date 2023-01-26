const grid = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
];
let turn = 1;

const X = 1;
const O = -1;
const EMPTY = 0;

function updateTurnHeader() {
	document.getElementById("gameStatus").textContent = `${
		turn === X ? "Player 1" : "Player 2"
	}'s turn`;
}

function paintBoard() {
	document.querySelectorAll(".marker").forEach((marker) => marker.remove());
	for (let r = 0; r < 3; r++) {
		for (let c = 0; c < 3; c++) {
			const cellVal = grid[r][c];
			if (cellVal === EMPTY) continue;

			const cellId = r * 3 + c;
			let newMarker = document.createElement("img");
			newMarker.classList.add("marker");
			newMarker.src = cellVal === X ? "x.svg" : "O.svg";
			document.getElementById(cellId).appendChild(newMarker);
		}
	}
	updateTurnHeader();
}

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
	cell.addEventListener("click", () => {
		const cellId = Number(cell.id);
		const row = Math.floor(cellId / 3);
		const col = cellId % 3;

		if (grid[row][col] !== EMPTY) return;

		grid[row][col] = turn;
		turn = turn === X ? O : X;
		paintBoard();
	});
});

updateTurnHeader();
