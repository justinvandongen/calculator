import {calculate} from "./calculate.js";

function actie() {
	const uitkomst = calculate(document.getElementById('a').value, document.getElementById('b').value, document.getElementById('operator').value);
	document.getElementById('result').innerHTML = uitkomst;
}

document.getElementById('operator').addEventListener('change', actie);
