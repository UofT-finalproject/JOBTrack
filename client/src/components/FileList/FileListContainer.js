import React from 'react';
import { List } from 'semantic-ui-react';

const FileListContainer = ({attachments}) => {
    let fileList = [];
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
                        <a href={link} target='blank' >{ link.split('/').pop()}</a>
                        </List.Content>
                    </List.Item>)
        })
    }

    return fileList;
}

export default FileListContainer;