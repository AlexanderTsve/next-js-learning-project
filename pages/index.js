import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { Fragment } from "react";
import { connectToDatabase } from "./util/connectToDatabase";
function HomePage({ meetups }) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const client = await connectToDatabase();
  const db = client.db();
  const meetupsCollection = db.collection("meetupsCollection");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: MEETUPS,
//     },
//   };
// }
export default HomePage;
