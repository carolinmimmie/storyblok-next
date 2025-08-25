import React from "react";

const Testimonial = (params: any) => {
  return (
    <div className="bg-white p-8 rounded-sm shadow">
      <p className="text-xl leading-relaxed mt-6">{params.blok.comment}</p>
      <p className="text-lg font-semibold mt-6">{params.blok.name}</p>
    </div>
  );
};

export default Testimonial;
