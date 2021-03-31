import React from 'react';
import { List, Icon } from 'semantic-ui-react';
import API from '../../utils/API';
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_JOB } from '../../utils/actions';


const FileListContainer = ({attachments}) => {
    const [state, dispatch] = useStoreContext();
    let fileList = [];
    const handleDelete = (key, i) => {
        console.log(key, i.index);
        let newAttachments =[...state.currentJob.attachments];
        API.deleteFile(key)
        .then(() => {
            console.log('dfds');
            newAttachments.splice(i.index, 1);
            let updatedJob = { ...state.updatedJob, attachments: newAttachments }
            dispatch({ type: UPDATE_JOB, updatedJob: updatedJob });
            console.log(i, state.currentJob.attachments)
        })
    }
        let fileIcon = '';
            if (attachments.length > 0){
            fileList = attachments.map((link, i) => {
            // Making file Icon class depending on file type
            const type = link.split('.').pop();
            switch(type) {
            case 'pdf': fileIcon = 'file pdf';
            break;
            case 'docx': fileIcon = 'file word';
            break;
            case 'jpg' : fileIcon = 'file image';
            break;
            case 'png' : fileIcon = 'file image';
            break;
            default: fileIcon = 'file alternate';
            }

    return (<List.Item key={i} style={{ display: 'flex'}} onClick={e => e.stopPropagation()}>
                <List.Icon name={`${fileIcon}`} color='grey'  />
                <List.Content>
                    <a href={link} target='blank' >
                        { link.split('/').pop()}
                    </a>
                    <Icon name='times rectangle'
                        index = {i}
                        color='grey' 
                        style={{marginLeft: '2px', fontSize: 12}} 
                        onClick={(link, i) => {
                            handleDelete(link, i);
                        }}
                        />
                </List.Content>
            </List.Item>)
        })
    }

    return fileList;
}

export default FileListContainer;