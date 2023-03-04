import React from 'react';

const LastActivityUserItem = ({index,data}) => {

    return (
        <tr>
            <td>{index}</td>
            <td>{data.ProjectName}</td>
            <td>{data.ProjectStart}</td>
            <td>{data.TimeWorking}</td>
            <td className="project-status"><span>{data.ProjectStatus}</span></td>
            <td>{data.LastConmmit}</td>
            <td>{data.UserRole}</td>
            <td>{data.CreatedAt}</td>

        </tr>
    )
}
export default LastActivityUserItem;