import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useFirestore } from '../../hooks/useFirestore';
import AuthContext from '../../store/auth.context';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = () => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const { addDocument, response } = useFirestore('meetups');
  const { user } = useContext(AuthContext);

  const history = useHistory();

  // const onAddMeetup = meetupData => {
  //   fetch('https://my-project-807df-default-rtdb.firebaseio.com/meetups.json', {
  //     method: 'POST',
  //     body: JSON.stringify(meetupData),
  //     headers: { 'Content-Type': 'application/json' },
  //   }).then(() => history.replace('/all-meetups'));
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   const enteredTitle = titleInputRef.current.value;
  //   const enteredImage = imageInputRef.current.value;
  //   const enteredAddress = addressInputRef.current.value;
  //   const enteredDescription = descriptionInputRef.current.value;

  //   const meetupData = {
  //     title: enteredTitle,
  //     image: enteredImage,
  //     address: enteredAddress,
  //     description: enteredDescription,
  //   };

  //   onAddMeetup(meetupData);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    addDocument({
      uid: user.uid,
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    });
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            rows="5"
            id="description"
            required
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
