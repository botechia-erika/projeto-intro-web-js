const taskItem00 = {
    idTask: 0,
    taskName: "T0- Task MODELO",
    taskDescription: "Tarefas curso web fullstack",
    taskURL: "",
    taskModule: "",
    taskStatus: 0,
    createdAt: "dd/mm/yyyy 00:00:00",
    taskResponsable: "conway-botechia-erika"
}
const projetoRepo00 = {
    idTask: 0,
    projectName: "T0- Projeto MODELO",
    projectDescription: "Tarefas curso web fullstack",
    projectURL: "",
    projectModule: "",
    projectStatus: 0,
    createdAt: "dd/mm/yyyy 00:00:00",
    projectResponsable: "conway-botechia-erika"
}

const praticaGuiada00 = {
    idPG: 0,
    pgName: "T0- Projeto MODELO",
    pgDescription: "Tarefas curso web fullstack",
    pgURL: "",
    pgModule: "",
    pgStatus: 0,
    createdAt: "dd/mm/yyyy 00:00:00",
    pgResponsable: "conway-botechia-erika"
}


const exercicio00 = {
    idE: 0,
    eName: "E0- Projeto MODELO",
    eDescription: "EXERCICIO 00 curso web fullstack",
    eURL: "",
    eModule: "",
    eStatus: 0,
    createdAt: "dd/mm/yyyy 00:00:00",
    eResponsable: "conway-botechia-erika"
}


const fixacao00 = {
    idFixa: 0,
    fixaName: "E0- Projeto MODELO",
    fixaDescription: "EXERCICIO 00 curso web fullstack",
    fixaURL: "",
    fixaModule: "",
    fixaStatus: 0,
    createdAt: "dd/mm/yyyy 00:00:00",
    fixaResponsable: "conway-botechia-erika"
}
const cursos = ["HTML e CSS", "JavaScript", "APIs REST"];
const turmas = ["HC1", "JS1", "JS2", "REST1", "REST2"];


const aluno1 = "João"
const idade1 = 28
const email1 = "botechiaeri@gmail.com"
const verificouEmail1 = true
const projetos1 = ["Projeto HTML", "Projeto CSS", "Projeto JS"]

const aluno2 = "Ana"
const idade2 = 26
const verificouEmai2 = true
const projetos2 = ["Projeto HTML", "Projeto CSS", "Projeto JS"]

const aluno3 = "Cris"
const idade3 = undefined
const verificouEmail3 = false
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