const fs = require("fs");
const path = require("path");

// Criar uma pasta
/* fs.mkdir(path.join(__dirname, '/test'), (error) =>{
    if(error){
        return console.log("Erro: ", error)
    }
    console.log("Pasta criada com sucesso!")
 })
 //Criar um arquivo
fs.writeFile(path.join(__dirname, '/test' , 'teste.txt'), 'helo node!', (error)=>{
    if(error){
       return console.log('erro: ' + error)
    }
    console.log('arquivo criado com sucesso')
}) */

// Adicionar à um arquivo
fs.appendFile(
  path.join(__dirname, "/test", "teste.txt"),
  "hello world!",
  (error) => {
    if (error) {
      return console.log("error", error);
    }
    console.log("arquivo atualizado com sucesso");
  }
);

//ler arquivo
fs.readFile(
  path.join(__dirname, "/test", "teste.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("err: ", error);
    }
    console.log(data);
  }
);
