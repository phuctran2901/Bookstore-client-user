import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import './index.css';

export const CarouselP = () => {
    return (
        <Carousel
            showThumbs={false}
            emulateTouch={true}
            showStatus={false}
            autoPlay={false}
        >
            <div>
                <img
                    className="carousel-img"
                    src="http://vietchiase.net/wp-content/uploads/2020/05/review-sach-hay-5-centimet-tren-giay.jpg"
                    alt="5 centimet trên giây"
                />
                <div className="carousel-content">
                    <p>Sách mới</p>
                    <h1>5 centimet trên giây</h1>
                    <Link to="/Detail-product/610bc06941a3fc18e412f67f">Chi tiết</Link>
                </div>
            </div>
            <div>
                <img
                    alt="3 Kinh Nghiệm Viết Sách Thành Công Sau 10 Năm Đúc Rút..."
                    className="carousel-img"
                    src="https://demo.tokopress.com/bookie/wp-content/uploads/sites/7/2016/06/slider-03.jpg"
                />
                <div className="carousel-content">
                    <p>3 Kinh Nghiệm Viết Sách Thành Công Sau 10 Năm Đúc Rút...</p>
                    <h1>Bài viết mới nhất</h1>
                    <Link to="/Detail-post/60f01bb67b21f8141067a734">Chi tiết</Link>
                </div>
            </div>
            <div>
                <img
                    className="carousel-img"
                    src="https://demo.tokopress.com/bookie/wp-content/uploads/sites/7/2016/06/slider-02.jpg"
                    alt="Nghệ thuật tinh tế của việc đếch quan tâm | Mark Manson"
                />
                <div className="carousel-content">
                    <p>Nghệ thuật tinh tế của việc đếch quan tâm | Mark Manson</p>
                    <h1>Bài viết review</h1>
                    <Link to="/Detail-post/6114fb84563d9a104097190d">Chi tiết</Link>
                </div>
            </div>
        </Carousel>
    )
}
