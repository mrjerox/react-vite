import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import { getAllPost } from "../../api/APIUtils"


function HeroBanner() {
    const [slides, setSlides] = useState([])
    
    useEffect(() => {
        getAllPost('?limit=3&offset=5')
        .then((res) => {
            console.log(res.data)
        })
    },[])
    return (
        <>
            <section id="hero-slider" className="hero-slider">
                <div className="container-md" data-aos="fade-in">
                    <div className="row">
                        <div className="col-12">
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                            >
                                <SwiperSlide>
                                    <a
                                        href="single-post.html"
                                        className="img-bg d-flex align-items-end"
                                        style={{
                                            backgroundImage:
                                                'url("img/post-slide-1.jpg")',
                                        }}
                                    >
                                        <div className="img-bg-inner">
                                            <h2>
                                                The Best Homemade Masks for Face
                                                (keep the Pimples Away)
                                            </h2>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Quidem neque est mollitia!
                                                Beatae minima assumenda repellat
                                                harum vero, officiis ipsam
                                                magnam obcaecati cumque maxime
                                                inventore repudiandae quidem
                                                necessitatibus rem atque.
                                            </p>
                                        </div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a
                                        href="single-post.html"
                                        className="img-bg d-flex align-items-end"
                                        style={{
                                            backgroundImage:
                                                'url("img/post-slide-1.jpg")',
                                        }}
                                    >
                                        <div className="img-bg-inner">
                                            <h2>
                                                The Best Homemade Masks for Face
                                                (keep the Pimples Away)
                                            </h2>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Quidem neque est mollitia!
                                                Beatae minima assumenda repellat
                                                harum vero, officiis ipsam
                                                magnam obcaecati cumque maxime
                                                inventore repudiandae quidem
                                                necessitatibus rem atque.
                                            </p>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroBanner;