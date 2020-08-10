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

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number ((hour + 60) + minutes)

}

module.exports = {
    subjects,
    weekdays,
    getSubject

}