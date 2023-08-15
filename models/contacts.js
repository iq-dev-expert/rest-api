const fs = require("fs/promises");
const path = require("path");

const contactListPath = path.join(__dirname, "contacts.json");

const getContactList = async () => {
  const contactList = await fs.readFile(contactListPath);
  return JSON.parse(contactList);
};

const getContactById = async (contactId) => {};

const removeContact = async (contactId) => {};

const addContact = async (body) => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  getContactList,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
