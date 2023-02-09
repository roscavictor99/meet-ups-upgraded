import MeetupItem from './MeetupItem';

import classes from './MeetupList.module.css';

const MeetupList = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map(meetup => (
        <MeetupItem
          id={meetup.id}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
          image={meetup.image}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
