const aluno1 = "Erika Luisa Mendonça Botechia de Jesus Leite"
const idade1 = 28
const verificouEmail1 = true
const projetos1 = ["Projeto HTML", "Projeto CSS", "Projeto JS"]

const aluno2= "Rocio Suarez"
const idade2= 26
const verificouEmai2 = true
const projetos2 = ["Projeto HTML", "Projeto CSS", "Projeto JS"]

const aluno3 = "FULANO"
const idade3 = undefined
const verificouEmail3 =  false
const projetos3 = [""]

console.log(
`
${aluno1.toUpperCase()}
"idade": ${idade1}
"verificouEmail": ${verificouEmail1}
"projetos": ${projetos1}
--------------------------------------------------------

${aluno2.toUpperCase()}
"idade": ${idade2}
"verificouEmail": ${verificouEmai2}
"projetos": ${projetos2}
--------------------------------------------------------

${aluno3}
"idade": ${idade3}
"verificouEmail": ${verificouEmail3}
"projetos": ${projetos3}
`
)
console.log('fim de script semana-1')