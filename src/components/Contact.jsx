import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus({ isSubmitting: false, isSubmitted: false, error: null });
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: 'Failed to send message. Please try again later.' 
      });
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider" />
        <p className="section-subtitle max-w-3xl mx-auto">
          Have a question or want to work together? Feel free to contact me using the form below.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <p className="text-gray-400 mb-8">
            I'm interested in freelance opportunities, especially ambitious or large projects. 
            However, if you have other requests or questions, don't hesitate to reach out using the form.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="bg-primary/20 p-3 rounded-full mr-4">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Location</h4>
                <p className="text-gray-400">Lucknow,India </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/20 p-3 rounded-full mr-4">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Email</h4>
                <a 
                  href="mailto:abhayofc59@gmail.com" 
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  abhayofc59@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/20 p-3 rounded-full mr-4">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Phone</h4>
                <p className="text-gray-400">+91 6386648923</p>
              </div>
            </div>
          </div>

          {/* Map or Image */}
          <div className="rounded-lg overflow-hidden h-48 bg-gray-800 flex items-center justify-center">
            <p className="text-gray-400">Map placeholder</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-colors duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-colors duration-300"
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-colors duration-300"
                placeholder="Project Inquiry"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-colors duration-300"
                placeholder="Hello, I'd like to talk about..."
                required
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              disabled={formStatus.isSubmitting || formStatus.isSubmitted}
              className={`w-full py-3 px-4 rounded-md text-white flex items-center justify-center space-x-2 transition-colors duration-300 ${
                formStatus.isSubmitted 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-primary hover:bg-primary/90'
              }`}
              whileHover={{ scale: formStatus.isSubmitting || formStatus.isSubmitted ? 1 : 1.02 }}
              whileTap={{ scale: formStatus.isSubmitting || formStatus.isSubmitted ? 1 : 0.98 }}
            >
              {formStatus.isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : formStatus.isSubmitted ? (
                <>
                  <span>Message Sent Successfully!</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
            
            {formStatus.error && (
              <p className="text-red-500 mt-2 text-center">{formStatus.error}</p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;