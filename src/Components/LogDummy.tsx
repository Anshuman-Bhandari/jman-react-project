import React, { useState } from 'react'
import reviews from '../Data/dummy';
import '../assets/LogDummy.css'

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

const LogDummy = () => {
    const [data, setData] = useState<review[]>(reviews)

    console.log(data)

  return (
    <div>
        <h2>Review Data</h2>
        <ul>
        {
            data.map((review, index) => (
                <li>
                    <span>Comment : </span> {review.comment} <br />
                    <span>Created At : </span> {review.createdAt} <br />
                    <span>ID : </span> {review.id} <br />
                    <span>Product ID : </span> {review.productId} <br />
                    <span>Rating : </span> {review.rating} <br />
                    <span>Reviewer Info</span>
                    <ul>
                        {
                            <li>
                                {review.reviewer.email + " - "} {review.reviewer.name + " - "} {review.reviewer.userId} 
                            </li>
                        }
                    </ul> <br />
                    <span>Status : </span> {review.status} <br />
                    <span>Tags : </span> {review.tags[0] + "  " + review.tags[1] + "  " + review.tags[2]}
                </li>
            ))
        }
        </ul>
    </div>
  )
}

export default LogDummy