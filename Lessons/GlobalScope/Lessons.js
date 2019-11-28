//declare global variables
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';
//function to call variables
function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky())

//created variable inside a function
function logVisibleLightWaves() {
  const lightWaves = 'Moonlight'
  //can call variable inside function
  console.log(lightWaves)
}
console.log(logVisibleLightWaves())
//does not work variable does not exist outside of function
console.log(lightwaves)


const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }

  console.log(lightWaves);
};

logVisibleLightWaves();
