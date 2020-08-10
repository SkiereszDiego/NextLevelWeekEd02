//###Servidor###
const express = require('express')
const server = express()


const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

const nunjucks = require('nunjucks')
//###Template Engine###
//configurar nunjucks, mostro a pasta e peço pra ele enviar um objt
nunjucks.configure('src/views', {
    express:server,
    noCashe: true, //Para ele sempre mostrar coisas recentes e não guardadas
})

//###Inicio e Configuração do Servidor###
server
//receber os daddos do req body
.use(express.urlencoded({ extended: true }))
//configurar arquivos estaticos (ccss, script, imagens)
server.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
 
//###Start do Servidor
.listen(5500)