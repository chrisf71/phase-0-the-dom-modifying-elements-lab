const mainElement = document.querySelector('#main');
if (mainElement) {
  mainElement.remove();
}
const victoryHeader = document.querySelector('h1#victory');

const newHeader = document.createElement("h1");

newHeader.id = 'victory';
newHeader.textContent = "Christopher is the champion;" 