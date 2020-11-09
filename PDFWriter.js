const pdf = require('html-pdf');

class PDFWriter {

     static WritePDF(filename, html){
         pdf.create(html,{}).tofile(filename,(err) => {});
     }

}

module.exports = PDFWriter;