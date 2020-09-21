import React, { useContext, useEffect, useState } from 'react';
import Wrapper from '../../components/page-wrapper/wrapper';
import Review from '../../components/review/review';
import styles from './reviews-page.module.css';
import ReactPaginate from 'react-paginate';
import UserContext from '../../utils/context';
import { Link } from 'react-router-dom';
const ReviewsPage = (props) => {

    const [reviewsToRender, setReviewsToRender] = useState([])
    const [offset, setOffset] = useState(0)
    const [perPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    
    const { loggedIn } = useContext(UserContext);

    const getReviews = async () => {
        const response = await fetch("http://localhost:9999/api/reviews/");
        const reviews = await response.json();
        const reviewsToMap = reviews.slice(offset, offset + perPage);
        const reviewsToRender = reviewsToMap.map(review => {

            return <Review key={review._id} {...review} />
        })

        setPageCount(Math.ceil(reviews.length / perPage))
        setReviewsToRender(reviewsToRender)
    }
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;

        setOffset(offset);
        setCurrentPage(selectedPage);
      
    };

    useEffect(() => {
        getReviews()
    })

    let button;
    if (loggedIn) {
        button =
            <div className={styles["review-button-div"]}>
                <Link to="leaveareview"><span>Leave a Review</span></Link>
            </div>;
    } else {
        button = null;
    }
    return (
        <Wrapper>
            <div className={styles["reviews-page"]}>
                <div className={styles["reviews-container"]}>
                    <div className={styles.reviews}>
                        {reviewsToRender}
                        <ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            breakLabel={"..."}
                            breakClassName={styles["break-me"]}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={styles["pagination"]}
                            subContainerClassName={styles["pages-pagination"]}
                            activeClassName={styles["active"]} />
                    </div>
                    {button}
                </div>
            </div>
        </Wrapper>
    )

}

export default ReviewsPage