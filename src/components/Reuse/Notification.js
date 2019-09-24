import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';

const Notification = ({}) => {
    return (
        toast.notify('Hello world!')
    );
};

export default Notification;