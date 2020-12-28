import { default as Handsontable } from "handsontable";
import "../assets/handsontable.full.min.css"

window.onload = () => {
    var data = [
        ['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
        ['2017', 10, 11, 12, 13],
        ['2018', 20, 11, 14, 13],
        ['2019', 30, 15, 12, 13]
    ];
      
    var container = document.getElementById('table');
    var hot = new Handsontable(container, {
        data: data,
        rowHeaders: true,
        colHeaders: true,
        filters: true,
        dropdownMenu: true
    });
    
}

