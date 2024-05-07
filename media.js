let n1, n2, n3, p1, p2, p3, media

// Versão com as notas e pesos definidos

n1 = 10
n2 = 7
n3 = 6

p1 = 5
p2 = 5
p3 = 2

media = (n1*p1 + n2*p2 + n3*p3)/(p1+p2+p3)

console.log(`A média do aluno foi: ${media.toFixed(2)}`)


// Versão com pesos e notas para o usuário colocar (que irei deixar comentado)

// n1 = parseFloat(Float(prompt("digite a primeira nota: ")))
// n2 = parseFloat(Float(prompt("digite a segunda nota: ")))
// n3 = parseFloat(Float(prompt("digite a terceira nota: ")))

// p1 = parseFloat(Float(prompt("digite a primeiro peso: ")))
// p2 = parseFloat(Float(prompt("digite a segundo peso: ")))
// p3 = parseFloat(Float(prompt("digite a terceiro peso: ")))

// media = (n1*p1 + n2*p2 + n3*p3)/(p1+p2+p3)

// console.log(`A média do aluno foi: ${media.toFixed(2)}`)