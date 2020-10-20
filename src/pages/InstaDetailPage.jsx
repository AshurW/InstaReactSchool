import React, {useState, useEffect} from 'react'

export default function InstaDetailPage(props) {
    const instaId = props.match.params.instaId

    const [instaItem, setInstaItem] = useState(null)

    function fetchInstaData() {
        const url = `https://image-mock-data.firebaseio.com/images/${instaId}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setInstaItem(data)
        })
    }

    useEffect(() => {
        fetchInstaData()
    }, [])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    {instaItem && (
                        <>
                            <img className='img-fluid' src={instaItem.imageURL} alt="altern" />
                            <h5>{instaItem.title}</h5>
                            <p>{instaItem.description}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
