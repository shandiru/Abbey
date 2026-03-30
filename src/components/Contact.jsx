import  { useState, useRef } from "react";

const HOURS = [
  { day: "Monday", time: "8:30 am – 5:30 pm" },
  { day: "Tuesday", time: "8:30 am – 5:30 pm" },
  { day: "Wednesday", time: "8:30 am – 5:30 pm" },
  { day: "Thursday", time: "8:30 am – 5:30 pm" },
  { day: "Friday", time: "8:30 am – 5:30 pm" },
  { day: "Saturday", time: "8:30 am – 1:30 pm" },
  { day: "Sunday", time: "Closed" },
];

const SERVICES = [
  "Full Service","Half Service ","Brakes","Brake Pads ","Clutches","Exhausts","Bearing Work ","MOT"
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const PHONE_REGEX = /^(?:\+44|0)[1-9]\d{8,9}$/;

export default function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [selectedService, setSelectedService] = useState("");

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value?.trim()) return "Please enter your name.";
        if (value.trim().length < 2) return "Name looks too short.";
        return "";
      case "email":
        if (!value?.trim()) return "Please enter your email.";
        if (!EMAIL_REGEX.test(value.trim())) return "Enter a valid email address.";
        return "";
      case "phone":
        if (!value) return "";
        if (!PHONE_REGEX.test(value.trim()))
          return "Enter a valid phone (e.g. 07912 345 678).";
        return "";
      case "message":
        if (!value?.trim()) return "Please tell us about your requirements.";
        if (value.trim().length < 10) return "Message should be at least 10 characters.";
        return "";
      case "service":
        if (!value) return "Please select a service.";
        return "";
      default:
        return "";
    }
  };

  const validateForm = (form) => {
    const fd = new FormData(form);
    const fields = ["name", "email", "phone", "message", "service"];
    const newErrors = {};
    fields.forEach((f) => {
      const msg = validateField(f, fd.get(f));
      if (msg) newErrors[f] = msg;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const msg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    if (!validateForm(formRef.current)) {
      setStatus({ state: "error", message: "Please fix the highlighted fields." });
      return;
    }
    const formData = new FormData(formRef.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const messageText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${selectedService}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/+447737985510?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, "_blank");
    setStatus({ state: "success", message: "Opening WhatsApp..." });
    formRef.current.reset();
    setTouched({});
    setErrors({});
    setSelectedService("");
  };

  const inputBase = "w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-all duration-200 text-sm";
  const inputTheme = "bg-white dark:bg-[#0F172A] text-[#0F172A] dark:text-white border-gray-200 dark:border-[#3D4B5E] placeholder-gray-400 dark:placeholder-[#CBD5E1]/40";
  const inputError = "border-[#B62025] dark:border-[#FF4B4B]";

  return (
    <section id="contact" className="bg-slate-50 dark:bg-[#0F172A] py-20 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[#3B82F6] text-xs font-bold uppercase tracking-widest mb-3">Get In Touch</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white">Ready to Get Back on the Road?</h2>
          <p className="text-gray-600 dark:text-[#CBD5E1] mt-3 max-w-2xl mx-auto text-sm">
            Contact Abbey Tyres to schedule your MOT, service, or tyre replacement. Our expert team is here to help you stay safe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Info Card */}
          <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-gray-200 dark:border-[#3D4B5E] p-6 md:p-8 transition-colors duration-300">
            <h3 className="text-base font-bold text-[#0F172A] dark:text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#3B82F6]" /> Contact Information
            </h3>
            <div className="space-y-6 text-sm">
              <div>
                <p className="text-[#3B82F6] font-bold text-[10px] uppercase tracking-wider mb-1">Address</p>
                <address className="not-italic text-gray-600 dark:text-[#CBD5E1] leading-relaxed">
                  123 Abbey Rd., London NW6 4DN<br />United Kingdom
                   
                </address>
              </div>
              <div>
                <p className="text-[#3B82F6] font-bold text-[10px] uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:++447737985510" className="text-gray-600 dark:text-[#CBD5E1] hover:text-[#3B82F6] transition-colors">07737 985510</a>
              </div>
              <div>
                <p className="text-[#3B82F6] font-bold text-[10px] uppercase tracking-wider mb-2">Opening Hours</p>
                <ul className="divide-y divide-gray-100 dark:divide-[#3D4B5E] border border-gray-100 dark:border-[#3D4B5E] rounded-xl overflow-hidden">
                  {HOURS.map(({ day, time }) => (
                    <li key={day} className="grid grid-cols-2 gap-4 px-4 py-2 text-xs bg-gray-50/50 dark:bg-[#0F172A]/40">
                      <span className="text-gray-600 dark:text-[#CBD5E1]">{day}</span>
                      <span className={`text-right font-semibold ${time === "Closed" ? "text-[#B62025] dark:text-[#FF4B4B]" : "text-[#0F172A] dark:text-white"}`}>{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-gray-200 dark:border-[#3D4B5E] p-6 md:p-8 transition-colors duration-300">
            <h3 className="text-base font-bold text-[#0F172A] dark:text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#3B82F6]" /> Send Us a Message
            </h3>
            <form ref={formRef} onSubmit={sendWhatsAppMessage} className="space-y-4" noValidate>
              <input
                type="text"
                name="name"
                placeholder="Your name*"
                onBlur={handleBlur}
                className={`${inputBase} ${inputTheme} ${errors.name && touched.name ? inputError : ""}`}
              />
              {errors.name && touched.name && <p className="mt-1 text-xs text-[#B62025] dark:text-[#FF4B4B]">{errors.name}</p>}

              <input
                type="email"
                name="email"
                placeholder="Email address*"
                onBlur={handleBlur}
                className={`${inputBase} ${inputTheme} ${errors.email && touched.email ? inputError : ""}`}
              />
              {errors.email && touched.email && <p className="mt-1 text-xs text-[#B62025] dark:text-[#FF4B4B]">{errors.email}</p>}

              <select
                name="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                onBlur={handleBlur}
                className={`${inputBase} ${inputTheme} ${errors.service && touched.service ? inputError : ""}`}
              >
                <option value="">-- Select a Service --</option>
                {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>

              <input
                type="tel"
                name="phone"
                placeholder="Phone number*"
                onBlur={handleBlur}
                className={`${inputBase} ${inputTheme} ${errors.phone && touched.phone ? inputError : ""}`}
              />
              {errors.phone && touched.phone && <p className="mt-1 text-xs text-[#B62025] dark:text-[#FF4B4B]">{errors.phone}</p>}

              <textarea
                name="message"
                placeholder="Details of your requirements*"
                rows="4"
                onBlur={handleBlur}
                className={`${inputBase} ${inputTheme} resize-none ${errors.message && touched.message ? inputError : ""}`}
              />
              {errors.message && touched.message && <p className="mt-1 text-xs text-[#B62025] dark:text-[#FF4B4B]">{errors.message}</p>}

              <button
                type="submit"
                className="w-full text-white font-semibold bg-[#3B82F6] hover:bg-blue-400 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
                Send via WhatsApp
              </button>
              <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                By submitting, you agree to our processing of your details to provide you with a quote.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}