const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Layanan Pelanggan",
      action: "tel:+(62) 123 456 7890",
      text: "+(62) 123 456 7890",
    },
    {
      id: 2,
      title: "Butuh bantuan saat ini?",
      action: "mailto:hi@sportaloka",
      text: "hi@sportaloka.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className={"text-14 mt-30"}>{item.title}</div>
          <a href={item.action} className="text-14 fw-500 text-blue-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
