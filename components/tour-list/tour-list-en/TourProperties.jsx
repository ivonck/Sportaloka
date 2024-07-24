
'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import toursData from "../../../data/tours";
import Link from "next/link";

const TourProperties = () => {
  return (
    <>
      {toursData.slice(0, 5).map((item) => (
        <div
          className="col-12"
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item?.delayAnimation}
        >
          <div className="border-top-light pt-30">
            <div className="row x-gap-20 y-gap-30">
              <div className="col-md-auto">
                <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                  <div className="cardImage__content custom_inside-slider">
                    <Swiper
                      className="mySwiper"
                      modules={[Pagination, Navigation]}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                    >
                      {item?.slideImg?.map((slide, i) => (
                        <SwiperSlide key={i}>
                          <Image
                            width={300}
                            height={300}
                            className="rounded-4 col-12 js-lazy"
                            src={slide}
                            alt="image"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  {/* End .cardImage__content */}
                </div>
                {/* End cartImage */}
              </div>
              {/* End .col-auto */}

              <div className="col-md">
                <h3 className="text-18 lh-16 fw-500">
                  {item?.title}
                </h3>
                <p className="text-14 lh-14 mt-5">{item?.city}, {item?.province}</p>
                <div className="text-14 lh-15 fw-500 mt-20">
                  Site Facilities
                </div>
                <div className="text-14 text-green-2 fw-500 lh-15 mt-5">
                  Welcome Drink | Wifi | Free Parking | Landing to Takeoff Shuttle | Toilet
                </div>
                <div className="text-14 lh-14 text-light-1 mt-30">
                <i className="icon-like text-14 text-light-1"></i> {item?.numberOfReviews} reviews
                </div>
              </div>
              {/* End col-md */}

              <div className="col-md-auto text-left md:text-left">
                <div className="text-14 text-light-1">Starts from</div>
                <div className="text-22 lh-12 fw-600 mt-5">
                  IDR {item?.price}
                </div>
                <div className="text-14 text-light-1 mt-5">per person</div>

                <Link
                  href={`/hotel-single-v1/${item.id}`}
                  className="button -md -dark-1 bg-blue-1 text-white mt-24"
                >
                  View Detail <div className="icon-arrow-top-right ml-15"></div>
                </Link>
              </div>
              {/* End col-md */}
            </div>
            {/* End .row */}
          </div>
          {/* End border-top */}
        </div>
      ))}
    </>
  );
};

export default TourProperties;
