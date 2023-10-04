'use strict'

class PhoneBook{
    constructor(){
        this.contacts = [];
    }
    addNewContact(firstname, surname, phoneNumber, email){
        let contact = {firstname, surname, phoneNumber, email};
        this.contacts.push(contact);
    }
    
    editContact(firstname, surname, phoneNumber, email){
        this.contacts.forEach(contact => {
            if(contact.firstname === firstname && contact.surname === surname){
                contact.phoneNumber = phoneNumber;
                contact.email = email;
            }
        })
    }

    deleteContact(firstname, surname){
        this.contacts = this.contacts.filter(contact => {
            return contact.firstname !== firstname && contact.surname !== surname;
        }) 
    }
}

let phonebook = new PhoneBook();
phonebook.addNewContact('Joe', 'Brown', '098092222', 'Joebrown@gmail.com');
phonebook.editContact('Joe', 'Brown', '098090000', 'Joebrown23@gmail.com')
phonebook.addNewContact('Tad', 'Smith', '0954006677', 'Tadsmith@mail.com')
phonebook.deleteContact('Tad', 'Smith');
console.log(phonebook);