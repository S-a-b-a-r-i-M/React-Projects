import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AlertCircle, Loader2 } from 'lucide-react';

const FormDataWithFile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: ''
    }
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError('');
    setSuccess(false);

    try {
      const formData = new FormData();
      
      // Add the resume file
      formData.append('resume', data.resume[0]);
      
      // Convert other form data to JSON string and append
      const candidateData = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone
      };
      
      formData.append('candidate_data', JSON.stringify(candidateData));

      await axios.post(
        // 'http://localhost:8012/candidate-service/v1/candidates/marketplace',
        "https://hire10xdevapi.10xscale.ai/candidate-service/v1/candidates/marketplace",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setSuccess(true);
      reset();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit candidate data');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto ">
      <h2 className="text-2xl font-bold mb-6">Add Candidate to Marketplace</h2>
      
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center">
          <AlertCircle className="text-red-500 mr-2" size={20} />
          <span className="text-red-600">{error}</span>
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
          <span className="text-green-600">Candidate added successfully!</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            {...register('fullName', { required: 'Full name is required' })}
            className="w-full p-2 border rounded-md"
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm">{errors.fullName.message}</span>
          )}
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full p-2 border rounded-md"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label className="block mb-1">Phone</label>
          <input
            type="tel"
            {...register('phone', { required: 'Phone is required' })}
            className="w-full p-2 border rounded-md"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </div>

        <div>
          <label className="block mb-1">Resume</label>
          <input
            type="file"
            {...register('resume', { required: 'Resume is required' })}
            className="w-full p-2 border rounded-md"
            accept=".pdf,.doc,.docx"
          />
          {errors.resume && (
            <span className="text-red-500 text-sm">{errors.resume.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-blue-300 flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin mr-2" size={20} />
              Submitting...
            </>
          ) : (
            'Add Candidate'
          )}
        </button>
      </form>
    </div>
  );
};

export default FormDataWithFile;