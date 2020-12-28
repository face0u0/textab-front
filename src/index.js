import "../assets/jexcel.css"
import "../assets/customize.css"

import jexcel from "jexcel"

const vscode = acquireVsCodeApi();

class SheetDto{
    constructor(table, align){
        this.table = table
        this.align = align
    }
}

var data = [
    ['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
    ['2017', 10, 11, 12, 13],
    ['2018', 20, 11, 14, 13],
    ['2019', 30, 15, 12, 13]
];

var container = document.getElementById('table');

const table = jexcel(container, {
    data: data,
    saveAs: false,
    onchange(){
        sendTable()
    },
})

window.addEventListener("message", event => {
    console.log(event);
    const msg = event.data
    table.setData(msg.table)
})


console.log(table.getData())

const sendTable = () => {
    const sheet = new SheetDto(table.getData(), [])
    vscode.postMessage(sheet)
}

