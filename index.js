#!/usr/bin/env node

const yargs = require("yargs");
const {argv} = yargs(process.argv);
const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule()
prompt([
    {
        type: "input",
        name : "pokemon",
        message : "Enter a pokemon name to view its moves"
    }
]).then((answer) => {
    const pokemon = answer.pokemon;
    printMoves(pokemon);
})

const printMoves =  (async (charater) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${charater}`);
    const pokmon = await response.json();
    const moves = pokmon.moves.map(({move}) => move.name)
    console.log(moves.slice(0,5));
});