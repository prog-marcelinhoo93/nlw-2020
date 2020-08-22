// Dados
const proffys = [
    {
         name: "Marcelo Pagarine",
          avatar: "https://yt3.ggpht.com/a/AGF-l7_sXjd8J-KK3ZU6gAGj6UUNGsf70OgxmzsdPg=s900-c-k-c0xffffffff-no-rj-mo", 
          whatsapp: "55981267916", 
          bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
           subject: "Química",
            cost: "20",
             weekday: [0], 
            time_from: [720],
             time_to: [1220] 
   },
   {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
     subject: "Química",
      cost: "20",
       weekday: [1], 
      time_from: [720],
       time_to: [1220] 
   },
   {
    name: "prog-marcelinhoo93",
    avatar: "https://avatars2.githubusercontent.com/u/68404688?s=460&u=c9bd424735e1ad3cf6eb365c659dcbf84a888303&v=4", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
     subject: "Química",
      cost: "20",
       weekday: [1], 
      time_from: [720],
       time_to: [1220] 
   }



   
]

const subjects = [
   
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugês",
    "Química",
]

const weekdays = [
"Domingo",
"Segunda-feira",
"Terça-feira",
"Quarta-feira",
"Quinta-feira",
"Sexta-feira",
"Sábado",
]

// Funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    // se tiver dados (data)
    const isNoEmpty = Object.keys(data).length > 0
      if (isNoEmpty) { 

        data.subject = getSubject(data.subject)

    //adicionar dados ao a lista de proffys
    proffys.push(data)

    return res.redirect("/study")
}

    // se não, mostrar a página
    return res.render("give-classes.html", {subjects, weekdays})
}

// Servidor
const express = require('express')
const server = express()

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Início e configuração do servidor
server
//configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// start do servidor
.listen(5500)