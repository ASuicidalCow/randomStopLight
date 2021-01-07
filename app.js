var randomLights = ['Red', 'Green', 'Yellow'];
var randomLight = randomLights[Math.floor(Math.random() * 3)];

if (randomLight == 'Green') {
  console.log('Go');
} else if (randomLight == 'Yellow') {
  console.log('Slow Down');
} else {
  console.log('Stop!!');
}
