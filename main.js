import { parse } from "./parse.js";

const elEquation = document.querySelector("#equation");
const elSolve = document.querySelector("#solve");
const elSolution = document.querySelector("#solution");

elSolve.addEventListener("click", () => {
	elSolution.innerText = parse(elEquation.value);
});
