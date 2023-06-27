import MeetupList from "../components/meetups/MeetupList";
import { connectToDatabase } from "./util/connectToDatabase";
function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />;
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
