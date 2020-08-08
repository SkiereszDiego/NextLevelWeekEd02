//###Dados###
const proffys = [
    { name: "Diego Fernandes", 
    avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp:"89945998", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject:"Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1200]
    },
    { name: "Daniele Evangelista", 
    avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp:"89945998", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject:"História",
    cost: "20",
    weekday: [1],
    time_from: [720],
    time_to: [1200]
    },
    { name: "Maike Brito", 
    avatar:"https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
    whatsapp:"89945998", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject:"História",
    cost: "20",
    weekday: [1],
    time_from: [720],
    time_to: [1200]
    }


]
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geográfia",
    "História",
    "Matemática",
    "Português",
    "Químicas",
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

//###Funcionalidades###
//o "+" antes me garante que vai ser um numero
function getSubject(subjectNumber) {
    const position = +subjectNumber-1
    return subjects[position]
}

//traz a dependencia
//a barra é um pedido, to pedindo a barra pra vc, 
//me devolve uma coisa. E tu diz pra devolver uma função anonima
// essa setinha é uma arrow function
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    //objeto de hora re.query
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays }) //vai renderizar essa pagina recebendo um obj e nesse obj posso ter mtos outros objt
}

function pageGiveClasses(req, res) {
    const data = req.query
    
    //Object tem uma funcionalidade quizz q pode passsar uma funcionalidade q vc quer (data)
    //Pega as chaves(name,bio...) deste obj e transforma em um array
    //[Name, Avatar Bi, whatsapp] ou []....com o length tu pode saber se é zero
    const isNotEmpty = Object.keys(data).length > 0
    //se tiver dados add senao nao add
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

    //add os dados a lista de proffys
        proffys.push(data)

        return res.redirect("/study")

    }

    //se não, mostrar a pagina
    return res.render("give-classes.html", {subjects, weekdays})
}

//###Servidor###
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')


//###Template Engine###
//configurar nunjucks, mostro a pasta e peço pra ele enviar um objt
nunjucks.configure('src/views', {
    express:server,
    noCashe: true, //Para ele sempre mostrar coisas recentes e não guardadas
} )

//###Inicio e Configuração do Servidor###
//configurar arquivos estaticos (ccss, script, imagens)
server.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
 
//###Start do Servidor
.listen(5500)