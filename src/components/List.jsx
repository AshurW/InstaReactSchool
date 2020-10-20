import React, { useState } from 'react'
import Item from './Item'

export default function List({ data }) {

    const [isExpanded, setIsExpanded] = useState(null)

    return (
        <div>
            {data.map((item, index) => {
                return <Item key={index} item={item} index={index} isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            })}
        </div>
    )
}
