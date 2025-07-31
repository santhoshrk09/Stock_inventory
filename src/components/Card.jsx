import React from "react";

export default function Card({ objinfos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
      {objinfos.map((objinfo, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded shadow hover:scale-105 transition-transform duration-300"
        >
          <p className="text-sm font-semibold text-gray-700">{objinfo.product}</p>
          <p className="text-2xl font-bold">{objinfo.amount}</p>
          <a
            href={objinfo.link || "#"}
            className="text-blue-600 text-sm mt-2 inline-block"
          >
            {objinfo.view}
          </a>
        </div>
      ))}
    </div>
  );
}
