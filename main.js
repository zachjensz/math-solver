import { parse } from "./parse.js";

const elEquation = document.querySelector("#equation");
const elForm = document.querySelector("form");
const elSolution = document.querySelector("#solution");

elForm.addEventListener("submit", (e) => {
	e.preventDefault()
	elSolution.innerText = parse(elEquation.value) ?? ' ';
});
