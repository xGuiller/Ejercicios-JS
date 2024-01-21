const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const anos = ages.filter(par => par % 2 == 0 && par > 50 );

console.log(anos);