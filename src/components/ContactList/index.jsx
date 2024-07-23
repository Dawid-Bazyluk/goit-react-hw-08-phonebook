import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, selectFilter } from "../../redux/selectors";
import { deleteContact } from "../../redux/contactsSlicer";

import styles from "./ContactList.module.scss";

import { Button } from "@mui/material";
import ListItem from "@mui/material/ListItem";

const ContactsList = ({ storage }) => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterStatus = filterValue.status;
  const filterContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterStatus),
  );

  const handledDelete = (id) => {
    dispatch(deleteContact(id));
    localStorage.setItem(storage, JSON.stringify(contacts));
  };

  const listItems =
    filterContact.length === 0
      ? ""
      : filterContact.map((item) => {
          return (
            <ListItem key={item.id} id={item.id} className={styles.listelement}>
              ➤ {item.name} : {item.number}
              <Button
                onClick={() => handledDelete(item.id)}
                type="submit"
                variant="outlined"
                size="small">
                Delete
              </Button>
            </ListItem>
          );
        });

  return <ul className={styles.listItem}>{listItems}</ul>;
};

export default ContactList;
