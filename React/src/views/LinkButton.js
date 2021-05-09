import axios from "axios";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Flash from "../containers/Flash"

export default function LinkButton({API_KEY}) {
  //console.log(API_KEY)

  const [type, setType] = useState('none');
  const [message, setMessage] = useState('no message');

  const pushLinkButton = () => {
    axios
      .put(
        `/api/${API_KEY}/config`,
        {'linkbutton': {'lastlinkbuttonpushed': Date.now() / 1000 | 0 }}
      ).then((fetchedData) => {
        console.log(fetchedData.data);
        setMessage('Pairing is allowed for 30 seconds');
        setType('none');
        setType('success');
      }).catch((error) => {
        console.error(error)
        setMessage('Error occured, check browser console');
        setType('none');
        setType('error');
      });
    };

  return (
    <div className="content">
      {type !== 'none' && <Flash type={type} message={message} duration="5000" setType={setType} />}
      <div className="contentContainer">
        <p>Push this button to accept the pairing of the requested app</p>
        <div className="linkbtn" onClick={() => pushLinkButton()}>Link App
        <div class="linkbtn2"></div></div>
      </div>
    </div>
  );
}