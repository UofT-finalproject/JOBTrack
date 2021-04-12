import React from "react";
import { List, Icon } from "semantic-ui-react";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import { SET_CURRENT_JOB, UPDATE_JOB } from "../../utils/actions";

const FileListContainer = ({ attachments, id }) => {
  const [state, dispatch] = useStoreContext();
  let fileList = [];

  const handleDelete = (e, link, index) => {
    e.stopPropagation();
    if (state.currentJob._id !== id) return;
    let newAttachments = [...state.currentJob.attachments];
    API.deleteFile(link.split("/").pop()).then(() => {
      newAttachments.splice(index, 1);
      let updatedJob = { ...state.currentJob, attachments: newAttachments };
      dispatch({ type: UPDATE_JOB, updatedJob: updatedJob });
      dispatch({ type: SET_CURRENT_JOB, currentJob: updatedJob });
    });
  };

  let fileIcon = "";
  if (attachments.length > 0) {
    fileList = attachments.map((link, i) => {
      // Making file Icon class depending on file type
      const type = link.split(".").pop();
      switch (type) {
        case "pdf":
          fileIcon = "file pdf";
          break;
        case "docx":
          fileIcon = "file word";
          break;
        case "jpg":
          fileIcon = "file image";
          break;
        case "jpeg":
          fileIcon = "file image";
          break;
        case "png":
          fileIcon = "file image";
          break;
        default:
          fileIcon = "file alternate";
      }

      return (
        <List.Item
          key={i}
          style={{ display: "flex" }}
          onClick={(e) => e.stopPropagation()}
        >
          <List.Icon name={`${fileIcon}`} color="grey" />
          <List.Content>
            <a href={link} target="blank">
              {link.split("/").pop()}
            </a>
            <Icon
              name="times rectangle"
              fileurl={link}
              index={i}
              color="grey"
              style={{ marginLeft: "2px", fontSize: 12 }}
              onClick={(e) => handleDelete(e, link, i)}
            />
          </List.Content>
        </List.Item>
      );
    });
  }

  return fileList;
};

export default FileListContainer;
