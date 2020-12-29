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

var data = [['', '']]

var container = document.getElementById('table');

const table = jexcel(container, {
    data: data,
    saveAs: false,
    onchange(){
        sendTable()
    },
    oninsertrow(){
        sendTable()
    },
    oninsertcolumn(){
        sendTable()
    },
    ondeleterow(){
        sendTable()
    },
    ondeletecolumn(){
        sendTable()
    },
    onpaste(){
        sendTable()
    }
})

const updateTable = (sheet) => {
    table.setWidth(0, sheet.table[0].length)
    table.setData(sheet.table)
}

window.addEventListener("message", event => {
    const msg = event.data
    updateTable(msg)
    vscode.setState(msg)
})

const sendTable = () => { 
    console.log(table.getWidth());
    const sheet = new SheetDto(table.getData(), ("l".repeat(table.getWidth().length)).split(""))
    vscode.postMessage(sheet)
    vscode.setState(sheet)
}

const state = vscode.getState();
if (state) {
    updateTable(state);
}