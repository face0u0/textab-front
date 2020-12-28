import "../assets/jexcel.css"
import "../assets/customize.css"

import jexcel from "jexcel"

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
        
    },
})

console.log(table.getData())

const sendTable = () =>{
    return table.getData()
}

