const fs = require('fs');
fs.mkfir('folder', (err)=>{
  if(err){
    console.log(err);
  } else {
    fs.writeFile('file.txt', (err)=>{
      if(err){
        console.log(err);
      } else {
        console.log("Successfully created the folder 'folder' and the file 'file.txt'");
      }
    })
  }
})
