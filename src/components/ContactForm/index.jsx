import React from "react";
import styles from "./ContactForm.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/selectors";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlicer";
import { Button, TextField } from "@mui/material";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    let isContact;
    contacts.forEach((person) => {
      if (form.name.value.toLowerCase() === person.name.toLowerCase()) {
        isContact = true;
      }
    });
    if (isContact) {
      alert(`${form.name.value} is already in contacts!`);
    }
    if (!isContact) {
      dispatch(
        addContact({
          name: form.name.value,
          number: form.number.value,
        }),
      );
    }
    form.reset();
  };

  const numberId = nanoid();
  const nameId = nanoid();

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor={nameId}>
          Name
        </label>
        <TextField
          variant="outlined"
          size="small"
          htmlFor={nameId}
          id={nameId}
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\u00D3\u00F3\u015A\u015B\u0179\u017A\u017B\u017C]+(([' \-][a-zA-Zа-яА-Я \u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\u00D3\u00F3\u015A\u015B\u0179\u017A\u017B\u017C])?[a-zA-Zа-яА-Я \u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\u00D3\u00F3\u015A\u015B\u0179\u017A\u017B\u017C]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label className={styles.label} htmlFor={numberId}>
          Number
        </label>
        <TextField
          variant="outlined"
          size="small"
          id={numberId}
          type="tel"
          name="number"
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="tel"
        />

        <Button
          type="submit"
          variant="outlined"
          style={{ width: "150px", marginTop: "30px", alignSelf: "center" }}>
          Add contact
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
