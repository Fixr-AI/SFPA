'use client';

import { useState } from 'react';

interface LeadFormProps {
  variant?: 'hero' | 'inline';
  className?: string;
}

export default function LeadForm({ variant = 'inline', className = '' }: LeadFormProps) {
  const [formData, setFormData] = useState({
    address: '',
    phone: '',
    email: '',
    situation: 'foreclosure',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Form submission failed');
        alert('There was an error submitting your form. Please call us at (856) 879-1492.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please call us at (856) 879-1492.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className={`bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center ${className}`}>
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 className="text-2xl font-bold text-secondary mb-2">Thank You!</h3>
        <p className="text-gray-700">
          We've received your information. Our team will contact you within 1 hour with your personalized relief options.
        </p>
      </div>
    );
  }

  const isHeroVariant = variant === 'hero';

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        isHeroVariant
          ? 'bg-white shadow-2xl rounded-lg p-8'
          : 'bg-gray-50 border-2 border-primary rounded-lg p-6'
      } ${className}`}
    >
      <h3 className={`${isHeroVariant ? 'text-2xl' : 'text-xl'} font-bold text-secondary mb-4`}>
        Get Your Relief Options
      </h3>
      <p className="text-gray-600 mb-6">Fill out the form below for up to 3 no-obligation solutions within 24 hours.</p>

      <div className="space-y-4">
        <div>
          <label htmlFor="address" className="block text-sm font-semibold text-secondary mb-2">
            Property Address *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Main St, City, PA"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-secondary mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 555-5555"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="situation" className="block text-sm font-semibold text-secondary mb-2">
            Your Situation
          </label>
          <select
            id="situation"
            name="situation"
            value={formData.situation}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          >
            <option value="foreclosure">Facing Foreclosure</option>
            <option value="behind-payments">Behind on Payments</option>
            <option value="job-loss">Recent Job Loss</option>
            <option value="divorce">Divorce/Separation</option>
            <option value="inherited">Inherited Property</option>
            <option value="relocation">Need to Relocate</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Get Relief Now!'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Your information is 100% confidential. No fees, no commissions, no obligations.
        </p>
      </div>
    </form>
  );
}
