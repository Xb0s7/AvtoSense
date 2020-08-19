import React from 'react';
import Wrapper from '../page-wrapper/wrapper';
import Review from '../review/review';
import styles from './reviews-page.module.css'
class ReviewsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        }
    }
   getReviews = async() =>{
        const response = await fetch("http://localhost:9999/api/reviews/");
        const reviews = await response.json();
        console.log(reviews);
        this.setState({
            reviews
        })
    }

    
    renderReviews() {
        const {reviews} = this.state;

        return reviews.map((review) => {
            return (
                <Review key={review._id} {...review}/>
            )
        })
    }
    componentDidMount() {
        this.getReviews();
    }
    render(){
        return (
            <Wrapper>
                <div className={styles["reviews-page"]}>
                    <div className={styles["reviews-container"]}>
                        <div className={styles.reviews}>
                        {this.renderReviews()}
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default ReviewsPage