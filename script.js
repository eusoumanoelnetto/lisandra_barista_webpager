let currentCharacter = 1;

function changeCharacter() {
    currentCharacter = currentCharacter === 1 ? 2 : 1;
    document.getElementById('character-img').src = currentCharacter === 1 ? 'assets/coffeesteaming.gif' : 'assets/coffee_cafe.gif';
}