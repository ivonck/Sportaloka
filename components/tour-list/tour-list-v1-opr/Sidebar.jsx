import CategoryTypes from "../sidebar/CategoryTypes";
import PirceSlider from "../sidebar/PirceSlider";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Provinces</h5>
        <div className="sidebar-checkbox">
          <CategoryTypes />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End popular filter */}


      {/* End Aminities filter */}

      {/* <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div> */}
      {/* End Nightly priceslider */}


      {/* End style filter */}


      {/* End Aminities filter */}
    </>
  );
};

export default Sidebar;
