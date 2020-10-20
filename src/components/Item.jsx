import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Item({ item, isExpanded, setIsExpanded, index }) {

    const [like, setLike] = useState(item.likes)
    const [likeToggle, setLikeToggle] = useState('')
    const [moreTextDisplay, setMoreTextDisplay] = useState('...more ')

    function toggleLike() {
        if (like === item.likes) {
            setLike(like + 1)
            setLikeToggle('squareLike')
        } else {
            setLike(item.likes)
            setLikeToggle('')
        }
    }

    function showDesc() {
        if (isExpanded === index) {
            setIsExpanded(null)
            setMoreTextDisplay('...more')
        } else {
            setIsExpanded(index)
            setMoreTextDisplay('...less')
        }
    }

    return (
        <div className='col-md-12 card'>
            <img className='img-fluid' src={item.imageURL} alt="somthing" />
            <h6 >{item.title} <span onClick={showDesc} className='moreText'>{moreTextDisplay}</span></h6>
            {isExpanded === index && (
                <>
                    <p>{item.description}</p>
                </>
            )}
            <p>
                <span className={'squareBtn ' + likeToggle} onClick={toggleLike}></span>
                {like} Likes
            </p>
            <p>
                <Link to={`/insta/${index}`}>Comment</Link>
            </p>
        </div>
    )
}
