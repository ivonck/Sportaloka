const CategoryTypes = () => {
  const categories = [
    { name: "Bali", count: 92 },
    { name: "Yogyakarta", count: 45 },
    { name: "Jawa Timur", count: 21 },
    { name: "Jawa Barat", count: 78 },
    { name: "Jawa Tengah", count: 679 },
  ];

  return (
    <>
      {categories.map((category) => (
        <div
          className="row y-gap-10 items-center justify-between"
          key={category.name}
        >
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{category.name}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{category.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryTypes;
