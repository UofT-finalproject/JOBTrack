import React from 'react';
import { Table } from 'semantic-ui-react';

function DescriptionCell(props) {
    return (
        <Table.Cell colSpan={4} 
            singleLine
            ><span dangerouslySetInnerHTML={{ __html: props.description }}></span></Table.Cell>
    )
}

export default DescriptionCell;