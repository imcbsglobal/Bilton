import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="pt-[130px] bg-gray-50 relative">
      <section className="mb-16">
        <div className="max-w-[1400px] mx-auto px-2 md:px-6">
          <div className="relative">
            <div className="boldText text-5xl md:text-7xl text-center font-bold mb-6 text-[#06362E]">
              Get In Touch with Us
            </div>
            {/* Decorative elements */}
            <div className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 w-16 h-1 bg-[#ffe7b0]"></div>
            <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 w-16 h-1 bg-[#ffe7b0]"></div>
          </div>
          <div className="text-center max-w-[900px] mx-auto text-gray-600 text-lg">
            We're dedicated to providing exceptional service. Reach out to us with your questions, 
            feedback, or inquiries, and our team will respond promptly to assist you.
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="max-w-[1400px] mx-auto px-2 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-12">
            {/* Left: Contact Form */}
            <div className="w-full p-8 md:p-12 bg-[#06362E] rounded-3xl shadow-xl transform transition-all hover:scale-[1.01] hover:shadow-2xl">
              <div className="text-3xl md:text-4xl font-bold text-[#ffe7b0] mb-6 boldText">
                Have Questions? We're Just a Message Away
              </div>
              <div className="text-sm mb-8 text-gray-100">
                We value your feedback and are eager to assist with any inquiries. Complete the form below, 
                and our team will reach out to you shortly.
              </div>
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
                <div className="w-full flex flex-col md:flex-row justify-between gap-5">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="firstName" className="font-semibold text-[#ffe7b0]">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="px-6 py-3 w-full outline-none border-none bg-[#fff] rounded-lg shadow-inner focus:ring-2 focus:ring-[#ffe7b0] transition"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="lastName" className="font-semibold text-[#ffe7b0]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="px-6 py-3 w-full outline-none border-none bg-[#ffffff] rounded-lg shadow-inner focus:ring-2 focus:ring-[#ffe7b0] transition"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="email" className="font-semibold text-[#ffe7b0]">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-6 py-3 w-full outline-none border-none bg-[#fff] rounded-lg shadow-inner focus:ring-2 focus:ring-[#ffe7b0] transition"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="phone" className="font-semibold text-[#ffe7b0]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="px-6 py-3 w-full outline-none border-none bg-[#fff] rounded-lg shadow-inner focus:ring-2 focus:ring-[#ffe7b0] transition"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="subject" className="font-semibold text-[#ffe7b0]">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="px-6 py-3 w-full outline-none border-none bg-[#fff] rounded-lg shadow-inner focus:ring-2 focus:ring-[#ffe7b0] transition"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="message" className="text-[#ffe7b0] font-semibold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Enter Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="px-6 py-3 w-full outline-none border-none bg-[#ffffff] rounded-lg shadow-inner focus:ring-2 focus:ring-[#ffe7b0] transition"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="mt-4 bg-[#ffe7b0] text-[#06362E] font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300 shadow-lg transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Right: Info Cards */}
            <div className="w-full flex flex-col gap-8">
              {/* Top card */}
              <div className="w-full h-auto bg-[#ffe7b0] rounded-3xl py-10 px-8 shadow-xl transform transition-all hover:scale-[1.01] hover:shadow-2xl">
                <div className="boldText mb-4 text-3xl font-bold text-[#06362E]">
                  Our experts will 
                  <span className="block mt-1">always help you</span>
                </div>
                <div className="text-[#06362E] opacity-90">
                  Our dedicated team of hospitality professionals is available around the clock to assist you with bookings, 
                  special requests, or any information you need about our services and amenities. We take pride in providing 
                  personalized attention to ensure your experience with us exceeds expectations.
                </div>
                {/* Decorative element */}
                <div className="w-16 h-16 absolute right-8 bottom-8 rounded-full border-4 border-[#06362E] opacity-20"></div>
              </div>
              
              {/* Contact info cards */}
              <div className="flex flex-col py-10 px-8 bg-[#06362E] rounded-3xl w-full gap-5 shadow-xl">
                <h3 className="text-2xl font-bold text-[#ffe7b0] mb-2">Contact Information</h3>
                
                <div className="py-5 px-6 bg-[#ffe7b0] w-full rounded-2xl flex gap-5 items-center shadow-md transform transition hover:scale-[1.02]">
                  <div className="text-[#ffe7b0] p-3 rounded-full bg-[#06362E] text-2xl flex items-center justify-center">
                    <HiOutlineMail/>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-[#06362E]">Email</span>
                    <span className="italic text-[#06362E] font-medium hover:underline">
                      <a href="mailto:info@biltonhotel.com">info@biltonhotel.com</a>
                    </span>
                  </div>
                </div>
                
                <div className="py-5 px-6 bg-[#ffe7b0] w-full rounded-2xl flex gap-5 items-center shadow-md transform transition hover:scale-[1.02]">
                  <div className="text-[#ffe7b0] p-3 rounded-full bg-[#06362E] text-2xl flex items-center justify-center">
                    <MdOutlineLocalPhone/>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-[#06362E]">Phone</span>
                    <span className="italic text-[#06362E] font-medium">
                      <a href="tel:+918946873479" className="hover:underline">+91 8946 873 479</a>
                    </span>
                    <span className="italic text-[#06362E] font-medium">
                      <a href="tel:+917882938938" className="hover:underline">+91 7882 938 938</a>
                    </span>
                  </div>
                </div>
                
                <div className="py-5 px-6 bg-[#ffe7b0] w-full rounded-2xl flex gap-5 items-center shadow-md transform transition hover:scale-[1.02]">
                  <div className="text-[#ffe7b0] p-3 rounded-full bg-[#06362E] text-2xl flex items-center justify-center">
                    <TiLocationOutline/>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-[#06362E]">Address</span>
                    <span className="italic text-[#06362E] font-medium">ABCD, street No:194</span>
                    <span className="italic text-[#06362E] font-medium">Luxury District, City</span>
                  </div>
                </div>
                
                {/* Social media icons (optional) */}
                <div className="flex gap-4 mt-4 justify-center">
                  <a href="#" className="p-3 bg-[#ffe7b0] rounded-full flex items-center justify-center hover:bg-opacity-80 transition">
                    <svg className="w-5 h-5 text-[#06362E]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-[#ffe7b0] rounded-full flex items-center justify-center hover:bg-opacity-80 transition">
                    <svg className="w-5 h-5 text-[#06362E]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-[#ffe7b0] rounded-full flex items-center justify-center hover:bg-opacity-80 transition">
                    <svg className="w-5 h-5 text-[#06362E]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mb-16">
        <div className="max-w-[1400px] mx-auto px-2 md:px-6">
          <div className="w-full h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
            {/* Replace with actual map component or embed */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.3094304525775!2d76.0791381748697!3d11.601274488602131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6732c43f035c1%3A0xc2dd278a1f8339e5!2sHotel%20Food%20Paradise!5e0!3m2!1sen!2sin!4v1746696544517!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;