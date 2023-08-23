// const fs = require("fs/promises");
// const path = require("path");
// const { nanoid } = require("nanoid");
// const { HttpError } = require("../helpers");

// const contactListPath = path.join(__dirname, "contacts.json");

// const getContactList = async () => {
//   try {
//     const contactList = await fs.readFile(contactListPath);
//     return JSON.parse(contactList);
//   } catch (error) {
//     throw HttpError(500, "Server error");
//   }
// };

// const getContactById = async (id) => {
//   const contactList = await getContactList();
//   const contactItem = contactList.find((contact) => contact.id === id);
//   return contactItem || null;
// };

// const addContact = async (newContactData) => {
//   const contactList = await getContactList();
//   const newContact = { id: nanoid(20), ...newContactData };
//   contactList.push(newContact);
//   await fs.writeFile(contactListPath, JSON.stringify(contactList, null, 2));
//   return newContact;
// };

// const updateContact = async (id, upDatedContact) => {
//   const contactList = await getContactList();
//   const index = contactList.findIndex((contact) => contact.id === id);

//   if (index === -1) {
//     return null;
//   }

//   contactList[index] = { id, ...upDatedContact };
//   await fs.writeFile(contactListPath, JSON.stringify(contactList, null, 2));
//   return contactList[index];
// };

// const removeContact = async (id) => {
//   const contactList = await getContactList();
//   const index = contactList.findIndex((contact) => contact.id === id);

//   if (index === -1) {
//     return null;
//   }

//   const [deletedContact] = contactList.splice(index, 1);
//   await fs.writeFile(contactListPath, JSON.stringify(contactList, null, 2));
//   return deletedContact;
// };

// module.exports = {
//   getContactList,
//   getContactById,
//   addContact,
//   updateContact,
//   removeContact,
// };
const { Schema, model } = require("mongoose");
const { mongooseError } = require("../helpers");

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

contactSchema.post("save", mongooseError);

const Contact = model("contact", contactSchema);

module.exports = Contact;
