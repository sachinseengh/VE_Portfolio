import React from "react";


const Contact = () => {
  return (
    <div className="w-full mx-auto p-6    " id="contact" style={{ backgroundColor: '#E1EFFF' }}>
      <div className="relative mt-20  ">
        {/* Upper Section */}
        <div className="flex flex-col lg:flex-row bg-gradient-to-r from-blue-300 to-blue-500 rounded-lg shadow-xl overflow-hidden relative z-20 px-8 py-12">
          {/* Profile Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-center">
            <img
              src={profile}
              alt="Sujay Sharma"
              className="rounded-full border-4 border-white shadow-lg mb-6"
              style={{ height: 150, width: 150 }}
            />
            <h1 className="text-3xl font-bold text-white mb-2">Sujay Sharma</h1>
            <h2 className="text-xl text-yellow-400 font-semibold">Video Editor</h2>
          </div>

          {/* About Section */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-10 text-center lg:text-left">
            <h1 className="text-white text-2xl font-semibold">About Me</h1>
            <h2 className="text-yellow-400 text-xl mt-2">Sujay Sharma</h2>
            <p className="text-white mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              praesentium exercitationem dolorum quis itaque molestias
              recusandae corrupti, libero hic aperiam. Maiores, sed facilis
              perferendis consectetur dolorum ipsam. Quo ipsum maiores ab
              voluptas amet quis voluptatum corrupti quia! Cumque, dolore
              eveniet?
            </p>
            <button
              className="mt-6 px-6 py-2 bg-yellow-400 text-white font-semibold rounded-md shadow-md hover:bg-yellow-500 transition-all"
              onClick={() => window.open("https://wa.me/", "_blank")}
            >
              WhatsApp
            </button>
          </div>
        </div>

        {/* Decorative Background */}
        <div className="absolute bottom-0 left-0 right-0 bg-blue-400 h-32 rounded-b-lg z-10"></div>
      </div>
    </div>
  );
};

export default Contact;
