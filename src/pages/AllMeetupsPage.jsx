import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/ui/Layout';
import { useCollection } from '../hooks/useCollection';
import AuthContext from '../store/auth.context';

const AllMeetupsPage = () => {
  const { user } = useContext(AuthContext);
  const { documents, error } = useCollection('meetups', [
    'uid',
    '==',
    user.uid,
  ]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   fetch('https://my-project-807df-default-rtdb.firebaseio.com/meetups.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       const meetups = [];

  //       for (const key in data) {
  //         console.log(key);
  //         const meetup = {
  //           id: key,
  //           ...data[key],
  //         };
  //         console.log(meetup);
  //         meetups.push(meetup);
  //         console.log(meetups);
  //       }
  //       setIsLoading(false);
  //       setLoadedMeetups(meetups);
  //     });
  // }, []);

  // if (isLoading) {
  //   return (
  //     <RotatingLines
  //       strokeColor="#3498db"
  //       strokeWidth="5"
  //       animationDuration="0.75"
  //       width="96"
  //       visible={true}
  //     />
  //   );
  // }

  return (
    <Layout>
      <section>
        <h1>All Meetups</h1>
        {error && <p>{error}</p>}
        {documents && <MeetupList meetups={documents} />}
      </section>
    </Layout>
  );
};

export default AllMeetupsPage;
