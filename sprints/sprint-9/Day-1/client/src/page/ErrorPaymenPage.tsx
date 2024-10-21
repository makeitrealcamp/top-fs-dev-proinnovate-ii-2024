import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

export const ErrorPaymentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <AlertCircle className="mx-auto text-red-500 w-16 h-16 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment Error</h1>
        <p className="text-gray-600 mb-8">
          We're sorry, but there was an error processing your payment. Please try again or contact support if the problem persists.
        </p>
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Return to Shop
        </Link>
      </div>
    </div>
  );
};
