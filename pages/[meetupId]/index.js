import MeetupDetail from "../../components/meetups/MeetupDetails";
function MeetupDetailsPage() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Barcelona_-_Arc_de_Triomf_%282%29.JPG/1280px-Barcelona_-_Arc_de_Triomf_%282%29.JPG"
      title="First meetup"
      address="First meetup address"
      description="First meetup description"
    />
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Barcelona_-_Arc_de_Triomf_%282%29.JPG/1280px-Barcelona_-_Arc_de_Triomf_%282%29.JPG",
        title: "First meetup",
        address: "First meetup address",
        description: "First meetup description",
      },
    },
  };
}
export default MeetupDetailsPage;
