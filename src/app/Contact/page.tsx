import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-gray-500">Home &gt; Contact</p>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-10">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-gray-600 text-center mb-8">
          For More Information About Our Products & Services, Please Feel Free
          To Drop Us An Email. Our Staff Is Always Here To Help You Out. Do Not
          Hesitate!
        </p>

        <div className="mb-8">
          <div className="text-gray-700">
            <p>
              <strong>Address:</strong> 730 St. 5th Avenue, New York NY10019,
              United States
            </p>
            <p>
              <strong>Phone:</strong> (+01) 546-9783, Mobile: (+01) 458-9312
            </p>
            <p>
              <strong>Working Time:</strong> Monday-Friday: 9:00 - 20:00,
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="This is optional"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-500 text-white font-medium rounded-md shadow hover:bg-yellow-600"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div>
          <p>
            <strong>High Quality</strong> <br />
            Crafted from top materials
          </p>
        </div>
        <div>
          <p>
            <strong>Warranty Protection</strong> <br />
            Over 2 years
          </p>
        </div>
        <div>
          <p>
            <strong>Free Shipping</strong> <br />
            Order over $150
          </p>
        </div>
        <div>
          <p>
            <strong>24/7 Support</strong> <br />
            Dedicated support
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;



