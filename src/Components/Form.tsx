import React, { useState } from 'react'

type review = {
    id: number,
    productId: number,
    rating: number,
    comment: string,
    reviewer: { userId: number, name: string, email: string },
    tags: string[],
    status: string,
    createdAt: string,
};

const Form = () => {


    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log({id, rating, comment, status, createdBy})
    }

    const [id, setID] = useState<string>("")
    const [rating, setRating] = useState<string>("")
    const [comment, setComment] = useState<string>("")
    const [status, setStatus] = useState<string>("")
    const [createdBy, setCreatedBy] = useState<string>("")

    return (
        <div>
            <hr />
            <form>
                <label> Review ID : </label>
                <input type="number" onChange={(e) => setID(e.target.value)} value={id} /><br />

                <label> Rating : </label>
                <input type="text" onChange={(e) => setRating(e.target.value)} value={rating}   /><br />

                <label> Comment : </label>
                <input type="text" onChange={(e) => setComment(e.target.value)} value={comment}  /> <br />

                <label> Status : </label>
                <input type="text" onChange={(e) => setStatus(e.target.value)} value={status}   /><br />

                <label> Created By : </label>
                <input type="text" onChange={(e) => setCreatedBy(e.target.value)} value={createdBy}   /> <br />

                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form