import React from "react";

const FooterComponents = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-4
      px-32 py-14 gap-y-10 bg-gray-100 text-gray-600"
    >
      <div className="space-y-4 text-xs text-gray-800">
        <h2 className="font-bold">ABOUT</h2>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h2 className="font-bold">COMMUNITY</h2>
        <p>Accessibility</p>
        <p>This is Not a real state </p>
        <p>its a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Papafam</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h2 className="font-bold">HOST</h2>
        <p>Next React</p>
        <p>Presents</p>
        <p>Zero to Full stack Hero</p>
        <p>Hundreds of Students</p>
        <p>Join Now</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h2 className="font-bold">SUPPORT</h2>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say Hi Youtube</p>
        <p>Easter Eggs</p>
        <p>For th Win</p>
      </div>
    </section>
  );
};

export default FooterComponents;
