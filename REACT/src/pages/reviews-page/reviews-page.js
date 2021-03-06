import React from 'react';
import Wrapper from '../../components/page-wrapper/wrapper';
import Review from '../../components/review/review';
import styles from './reviews-page.module.css';
import ReactPaginate from 'react-paginate';
import UserContext from '../../utils/context';
import {Link} from 'react-router-dom';
class ReviewsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviewsToRender: [],
            offset: 0,
            perPage:5,
            currentPage:0
        }
    }
    static contextType = UserContext;
   getReviews = async() =>{
        const response = await fetch("http://localhost:9999/api/reviews/");
        const reviews = await response.json();
        const reviewsToMap = reviews.slice(this.state.offset, this.state.offset + this.state.perPage);
        const reviewsToRender = reviewsToMap.map(review => {

            return <Review key={review._id} {...review}/>
        })
        this.setState({
            pageCount: Math.ceil(reviews.length / this.state.perPage),
            reviewsToRender
        })
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.getReviews()
        });

    };
    
    componentDidMount() {
        this.getReviews();
    }
    render(){
        let button;

        if(this.context.loggedIn){
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
                            {this.state.reviewsToRender}
                                <ReactPaginate
                                previousLabel={"<"}
                                nextLabel={">"}
                                breakLabel={"..."}
                                breakClassName={styles["break-me"]}
                                pageCount={this.state.pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={styles["pagination"]}
                                subContainerClassName={styles["pages-pagination"]}
                                activeClassName={styles["active"]}/>
                         </div>
                         {button};
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default ReviewsPage