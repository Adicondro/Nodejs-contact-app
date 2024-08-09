const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukkan Nama Anda : ', (nama) => {
    rl.question('Masukkan No Hp Anda : ', (noHP) => {
        
        const contact = {
            nama,
            noHP,
        };
        const file = fs.readFileSync('data/contacts.json', 'utf-8')
        const contacts = JSON.parse(file);
        
        contacts.push(contact);
        
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        
        console.log(contacts)
        console.log("Terimakasih atas Partisipasinya")

        rl.close();
    })
})

