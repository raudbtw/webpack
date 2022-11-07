import "./styles/index.scss"
import $ from "jquery"
import * as bootstrap from "bootstrap"
const entries = {
    name:'Max',
    age:19
}
const finalObj = {
    ...entries,
    language:'JS',  
    framework:'React'
}

$(".block").text("Hello from jquery")

console.log(finalObj)