import dynamic from "next/dynamic";
import Blog4 from "@/components/blog/Blog4";
import Brand2 from "@/components/brand/Brand2";
import DefaultFooter from "@/components/footer/default";
import Header2 from "@/components/header/header-2";
import Hero2 from "@/components/hero/hero-2";
import BlockGuide from "@/components/home/home-2/BlockGuide";
import CallToActions from "@/components/home/home-2/CallToActions";
import Subscribe from "@/components/home/home-2/Subscribe";
import Testimonial from "@/components/home/home-2/Testimonial";
import TestimonialRating from "@/components/home/home-2/TestimonialRating";
import FilterHotels3 from "@/components/hotels/FilterHotels3";

export const metadata = {
  title: "Sportaloka || Feel the Freedom with Every Step",
  description: "Adventure Portal",
};

const home_2 = () => {
  return (
    <>
      {/* End Page Title */}

      <Header2 />
      {/* End Header 2 */}

      <Hero2 />
      {/* End Hero 2 */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-40 sm:y-gap-10 justify-between">
            <BlockGuide />
          </div>
        </div>
      </section>
      {/* End travel block sections */}


      {/* End Connect with Travellers Sections */}
      <FilterHotels3 />

      {/* End Best Seller Hotels Sections */}

      <section className="layout-pt-lg layout-pb-lg bg-dark-3">
        <div className="container">
          <div className="row y-gap-60">
            <div className="col-xl-5 col-lg-6">
              <TestimonialRating />
            </div>
            {/* End .col */}

            <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-10">
              <Testimonial />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row justify-center text-center pt-60">
            <div className="col-auto">
              <div className="text-15 lh-1 text-white">
                Trusted by the world’s best
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="px-40 md:px-0">
            <div className="row y-gap-30 justify-between items-center pt-60 lg:pt-40">
              <Brand2 />
            </div>
          </div>
        </div>
      </section>
      {/* End testimonial and brand sections Section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Get inspiration for your next trip
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
          </div>
          {/* End .row  */}
          <div className="row y-gap-30 pt-40">
            <Blog4 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Section */}

      <Subscribe />
      {/* End Subscribe Section */}



      <CallToActions />
      {/* End CallToActions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_2), { ssr: false });
