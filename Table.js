class Table{

    constructor(arr){
        this.header =  arr[0]; //armazena o primeiro elemento
        arr.shift(); // remove o primeiro elemento cabecalho
        this.rows = arr;
    }

    get RowCount(){
        return this.rows.length;
    }

    get ColumCount(){
        return this.header.length;
    }

}

module.exports = Table;