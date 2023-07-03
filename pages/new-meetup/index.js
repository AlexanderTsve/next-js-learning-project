import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { Fragment } from "react";
function NewMeetup() {
  const router = useRouter();
  const addMeetupHandler = async (enteredData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.push("/");
  };
  return (
    <Fragment>
      <Head>
        <title>Add a new meetup</title>
        <meta name="description" content="Add your own meetups!" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}
export default NewMeetup;
