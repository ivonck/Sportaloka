import Image from "next/image";

const AvailableRooms = ({ hotel }) => {
  return (
    <>
      <div className="border-light rounded-4 px-30 py-30 sm:px-20 sm:py-20">
        <div className="row y-gap-20">
          <div className="col-12">
            <h3 className="text-18 fw-500 mb-15">Standart Flight</h3>
            <div className="roomGrid">
              <div className="roomGrid__header">
                <div>Package</div>
                <div>Benefits</div>
                <div />
              </div>
              {/* End .roomGrid__header */}

              <div className="roomGrid__grid">
                <div>
                  <div className="ratio ratio-1:1">
                    <Image
                      width={180}
                      height={180}
                      src="/img/paragliding/yogyakarta/y4.jpg"
                      alt="image"
                      className="img-ratio rounded-4"
                    />
                  </div>
                  {/* End image */}
                  <div className="y-gap-5 mt-20">

                    <div className="d-flex items-center">
                      <i className="icon-wifi text-20 mr-10" />
                      <div className="text-15">Free WiFi</div>
                    </div>
                    <div className="d-flex items-center">
                      <i className="icon-parking text-20 mr-10" />
                      <div className="text-15">Parking</div>
                    </div>

                  </div>
                  {/* End room features */}

                </div>
                {/* End roomgrid inner */}

                <div className="y-gap-30">
                  <div className="roomGrid__content">
                    <div>
                      <div className="text-15 fw-500 mb-10">
                        Your price includes:
                      </div>
                      <div className="y-gap-8">
                        <div className="d-flex items-center text-green-2">
                          <i className="icon-check text-12 mr-10" />
                          <div className="text-15">Action Cam</div>
                        </div>
                        <div className="d-flex items-center text-green-2">
                          <i className="icon-check text-12 mr-10" />
                          <div className="text-15">
                            Free transportation landing to take off
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                {/* End price features */}

                <div>
                  <div className="text-14 lh-1">Price for</div>
                  <div className="text-22 fw-500 lh-17 mt-5">
                    US${hotel?.price}
                  </div>
                  <a
                    href="#"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white mt-10"
                  >
                    Reserve <div className="icon-arrow-top-right ml-15" />
                  </a>
                  <div className="text-15 fw-500 mt-30">
                    You&lsquo;ll be taken to the next step
                  </div>
                  <ul className="list-disc y-gap-4 pt-5">
                    <li className="text-14">Confirmation is immediate</li>
                  </ul>
                </div>
                {/* End right price info */}
              </div>
            </div>
            {/* End .roomGrid */}
          </div>
          {/* End .col-12 */}
        </div>
        {/* End .row */}
      </div>
      {/* End standard twin room */}


    </>
  );
};

export default AvailableRooms;
