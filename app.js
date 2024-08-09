const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Membuat fo\ile contacts.json jika belum ada
const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}


const setPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        })
    })
}


const main = async () => {
    const nama = await setPertanyaan("Masukkan Nama Anda : ");
    const email = await setPertanyaan("Masukkan Email Anda : ");
    const noHP = await setPertanyaan("Masukkan Nomor HP Anda : ");

    const contact = { nama, email, noHP };
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(fileBuffer);
            
    contacts.push(contact);
            
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
            
    console.log(contacts)
    console.log("Terimakasih atas Partisipasinya")
    
    rl.close();
};


main()


