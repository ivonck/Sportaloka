const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Toll Free Customer Care",
      action: "tel:+(62) 888 888 888",
      text: "+(62) 123 456 7890",
    },
    {
      id: 2,
      title: "Need live support?",
      action: "mailto:info@sportaloka.com",
      text: "hi@sportaloka.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className={"text-14 mt-30"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-white mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
