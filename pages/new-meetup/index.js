import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetup() {
  const addMeetupHandler = (enteredData) => {
    console.log(enteredData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
export default NewMeetup;
