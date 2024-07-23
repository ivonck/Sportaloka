
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
            <div className="row x-gap-20 y-gap-20">
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

                  <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12" />
                    </button>
                  </div>
                  {/* End .cardImage__wishlist */}
                </div>
                {/* End cartImage */}
              </div>
              {/* End .col-auto */}

              <div className="col-md">
                <div className="row x-gap-10 items-center">
                  {/* <div className="col-auto">
                    <p className="text-14 lh-14 mb-5">
                      {item?.duration}+ minutes
                    </p>
                  </div> */}
                  {/* End col-auto */}

                  {/* <div className="col-auto">
                    <div className="size-3 rounded-full bg-light-1 mb-5"></div>
                  </div> */}
                  {/* End col-auto */}

                  {/* <div className="col-auto">
                    <p className="text-14 lh-14 mb-5">{item?.tourType}</p>
                  </div> */}
                  {/* End col-auto */}

                  {/* <div className="col-auto">
                    <div className="size-3 rounded-full bg-light-1 mb-5"></div>
                  </div> */}
                  {/* End col-auto */}

                  <div className="col-auto">
                    <p className="text-14 lh-14 mb-5">{item?.location}</p>
                  </div>
                  {/* End col-auto */}

                  <div className="col-auto">
                    <div className="size-3 rounded-full bg-light-1 mb-5"></div>
                  </div>
                  {/* End col-auto */}

                  <div className="col-auto">
                    <p className="text-14 lh-14 mb-5">{item?.province}</p>
                  </div>
                  {/* End col-auto */}
                </div>
                {/* End .row */}
                <h3 className="text-18 lh-16 fw-500">
                  {item?.title} <br />
                  <p className="text-14 lh-14 mt-5">{item?.description}</p>
                </h3>
                {/* <p className="text-14 lh-14 mt-5">{item?.location}</p>
                <div className="text-14 lh-15 fw-500 mt-20">
                  Taking safety measures
                </div>
                <div className="text-14 text-green-2 fw-500 lh-15 mt-5">
                  Free cancellation
                </div> */}
              </div>
              {/* End col-md */}

              <div className="col-md-auto text-right md:text-left">
                {/* <div className="d-flex x-gap-5 items-center justify-end md:justify-start">
                  <i className="icon-star text-10 text-yellow-1"></i>
                  <i className="icon-star text-10 text-yellow-1"></i>
                  <i className="icon-star text-10 text-yellow-1"></i>
                  <i className="icon-star text-10 text-yellow-1"></i>
                  <i className="icon-star text-10 text-yellow-1"></i>
                </div> */}

                {/* <div className="text-14 lh-14 text-light-1 mt-10">
                  {item?.numberOfReviews} reviews
                </div> */}

                <h3 className="text-18 lh-16 fw-500">
                  Price per Person
                </h3>

                <div className="text-14 text-light-1 mt-5">Indonesian Guest</div>
                <div className="text-20 lh-12 fw-600 mt-5">
                  IDR {item?.price}
                </div>
                <div className="text-14 text-light-1 mt-5">Foreign Guest</div>
                {/* <div className="text-14 text-light-1 mt-50 md:mt-20">Foreigner</div> */}
                <div className="text-20 lh-12 fw-600 mt-5">
                  IDR {item?.price2}
                </div>
                {/* <div className="text-14 text-light-1 mt-5">Foreign Tourist</div> */}

                <Link
                  href={`/hotel-single-v1/${item.id}`}
                  className="button -md -dark-1 bg-blue-1 text-white mt-24"
                >
                  Book Now <div className="icon-arrow-top-right ml-15"></div>
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
