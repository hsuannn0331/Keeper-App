import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpand] = useState(false);

  const [inputNote, setInputNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setInputNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function submitNote(e) {
    props.onAdd(inputNote);
    setInputNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  function expandNote() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            placeholder="Title"
            value={inputNote.title}
          />
        )}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={expandNote}
          placeholder="Take a note..."
          value={inputNote.content}
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab type="submit" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
