const contacts = require('./contacts')

const main = async () => {
    const nama = await contacts.setPertanyaan("Masukkan Nama Anda : ");
    const email = await contacts.setPertanyaan("Masukkan Email Anda : ");
    const noHP = await contacts.setPertanyaan("Masukkan Nomor HP Anda : ");

    contacts.simpanContact(nama, email, noHP)
};


main()


