const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const datos in alien){
    console.log(`The ${datos} of alien is ${alien[datos]}`);
}