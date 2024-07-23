import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsSlicer";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import ContactList from "../components/ContactList";

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <ContactForm />
      <Filter />
      <ContactList />
      {!!isLoading && !error && <b>Loadig...</b>}
    </>
  );
}
