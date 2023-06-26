import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";
const MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Barcelona_-_Arc_de_Triomf_%282%29.JPG/1280px-Barcelona_-_Arc_de_Triomf_%282%29.JPG",
    address: "First address",
    description: "This is the first meetup!",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Casa_Batllo_Overview_Barcelona_Spain_cut.jpg/831px-Casa_Batllo_Overview_Barcelona_Spain_cut.jpg",
    address: "Second address",
    description: "This is the second meetup!",
  },
];
function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />;
}
export async function getStaticProps() {
  return {
    props: {
      meetups: MEETUPS,
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
