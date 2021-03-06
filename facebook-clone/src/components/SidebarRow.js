import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarRow.css'
function SidebarRow({Icon,title,src}) {
    return (
        <div className="slidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
