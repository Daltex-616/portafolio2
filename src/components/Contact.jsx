import React, { useRef, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function ContactInfo({ icon, title, detail }) {
  return (
    <motion.div
      className="flex items-start p-4 rounded-xl bg-gradient-to-r from-blue-50 to-white hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex-shrink-0 text-blue-600 bg-blue-100 p-3 rounded-full">
        {icon}
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-medium text-gray-800">{title}</h4>
        <p className="text-gray-600 mt-1">{detail}</p>
      </div>
    </motion.div>
  );
}

export default function Contact() {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    user_name: "",  // ¡Cambiado para coincidir con EmailJS!
    user_email: "",  // ¡Cambiado para coincidir con EmailJS!
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      user_name: false,
      user_email: false,
      message: false,
    };

    if (!formData.user_name.trim()) {
      newErrors.user_name = true;
      isValid = false;
    }

    if (!formData.user_email.trim() || !/^\S+@\S+\.\S+$/.test(formData.user_email)) {
      newErrors.user_email = true;
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = true;
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (formErrors[id]) {
      setFormErrors((prev) => ({ ...prev, [id]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setAlert({
        show: true,
        message: "Por favor, completa todos los campos correctamente.",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitting(false);
          setAlert({
            show: true,
            message: "¡Mensaje enviado con éxito! Me pondré en contacto pronto.",
            type: "success",
          });
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          setIsSubmitting(false);
          setAlert({
            show: true,
            message: "Error al enviar el mensaje. Por favor, intenta de nuevo.",
            type: "error",
          });
          console.error("EmailJS error:", error);
        }
      );
  };

  const closeAlert = () => {
    setAlert((prev) => ({ ...prev, show: false }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold text-center text-gray-900 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contáctame
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Información de Contacto
            </h3>
            <div className="space-y-6">
              <ContactInfo
                icon={<Mail size={20} />}
                title="Email"
                detail="federicozamora616@gmail.com"
              />
              <ContactInfo
                icon={<MapPin size={20} />}
                title="Ubicación"
                detail="La Rioja, Argentina"
              />
            </div>

            <motion.div
              className="mt-12 p-6 bg-white rounded-xl shadow-md"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-xl font-medium text-gray-800 mb-3">
                Disponibilidad
              </h4>
              <p className="text-gray-600">
                Actualmente disponible para proyectos freelance y oportunidades de
                trabajo remoto.
              </p>
            </motion.div>
          </motion.div>

          <motion.form
            ref={form}
            className="space-y-6 bg-white p-8 rounded-xl shadow-md"
            variants={itemVariants}
            onSubmit={handleSubmit}
            noValidate
          >
            <motion.div variants={itemVariants}>
              <label
                htmlFor="user_name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nombre / Empresa
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-3 rounded-lg border ${
                  formErrors.user_name ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200`}
              />
              {formErrors.user_name && (
                <p className="mt-1 text-sm text-red-500">
                  Este campo es obligatorio.
                </p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="user_email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-3 rounded-lg border ${
                  formErrors.user_email ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200`}
              />
              {formErrors.user_email && (
                <p className="mt-1 text-sm text-red-500">
                  Por favor, ingresa un email válido.
                </p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-3 rounded-lg border ${
                  formErrors.message ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200`}
              ></textarea>
              {formErrors.message && (
                <p className="mt-1 text-sm text-red-500">
                  Este campo es obligatorio.
                </p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 text-white py-3 px-6 rounded-lg transition-all duration-300 ${
                  isSubmitting
                    ? "bg-blue-400"
                    : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>

      {alert.show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeAlert}
          />
          <div
            className={`relative z-10 w-full max-w-md rounded-xl overflow-hidden p-6 ${
              alert.type === "success"
                ? "bg-green-100 border-green-500"
                : "bg-red-100 border-red-500"
            } border`}
          >
            <div className="flex items-start">
              <div
                className={`flex-shrink-0 p-2 rounded-full ${
                  alert.type === "success"
                    ? "bg-green-500/20"
                    : "bg-red-500/20"
                }`}
              >
                {alert.type === "success" ? (
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </div>
              <div className="ml-4">
                <h3
                  className={`text-lg font-medium ${
                    alert.type === "success" ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {alert.type === "success" ? "Éxito" : "Error"}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    alert.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {alert.message}
                </p>
              </div>
            </div>
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  alert.type === "success"
                    ? "text-green-700 hover:bg-green-200"
                    : "text-red-700 hover:bg-red-200"
                } transition-colors`}
                onClick={closeAlert}
              >
                Cerrar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}