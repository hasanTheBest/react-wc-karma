import React from "react";
type InfoItemType = {
  icon: string;
  heading: string;
  description: string;
};
const ContactInfo = () => {
  const infoItems: InfoItemType[] = [
    {
      icon: "home",
      heading: "California, United States",
      description: "Santa monica bullevard",
    },
    {
      icon: "phone-handset",
      heading: "00 (440) 9865 562",
      description: "Mon to Fri 9am to 6 pm",
    },
    {
      icon: "envelope",
      heading: "support@colorlib.com",
      description: "Send us your query anytime!",
    },
  ];
  return (
    <div className="contact_info">
      {infoItems.map((item: InfoItemType) => (
        <div className="info_item" key={item.icon}>
          <i className={`lnr lnr-${item.icon}`}></i>
          <h6>{item.heading}</h6>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
