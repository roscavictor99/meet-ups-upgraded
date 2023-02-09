import NewMeetupForm from '../components/meetups/NewMeetupForm';
import Layout from '../components/ui/Layout';

const NewMeetupPage = () => {
  return (
    <Layout>
      <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm />
      </section>
    </Layout>
  );
};

export default NewMeetupPage;
