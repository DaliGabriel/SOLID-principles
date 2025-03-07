import Notification from "./components/Notification/Notification";
import Shadow from "./components/Notification/Shadow";

const OpenClosedPrinciple = () => {
  return (
    <div>
      <Shadow>
        <Notification title="Title" message="lorem ipsum" type="success" />
      </Shadow>
      <Shadow>
        <Notification title="Title" message="An error occurred." type="error" />
      </Shadow>
      <Shadow>
        <Notification
          title="Title"
          message="This is a warning."
          type="warning"
        />
      </Shadow>
      <Shadow>
        <Notification
          title="Title"
          message="This is a default notification."
          type="default"
        />
      </Shadow>
    </div>
  );
};

export default OpenClosedPrinciple;
