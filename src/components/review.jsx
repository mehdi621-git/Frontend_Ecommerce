import styles from'./review.module.css'

import React from 'react'

export const Review = ({item}) => {
  return (
  
    <div className={styles.main}>
        <p> <span>Email:</span>{item.reviewerEmail
        }</p>
        <p><span>Name:</span> {item.reviewerName
        }</p>
        <p> <span>Review:</span>{item.comment
        }</p>
        <p><span>Date:</span>{item.date}</p>
    </div>
 
  )
}
export default Review