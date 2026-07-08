import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../common/Button';
import { INTEREST_OPTIONS } from '../../constants';
import type { ContactFormData } from '../../types';

const schema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  interest: z.string().min(1, 'Please select an interest'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
  defaultInterest?: string;
}

export function ContactForm({ onSubmit, defaultInterest }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      interest: defaultInterest || INTEREST_OPTIONS[0],
      message: '',
    },
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    if (onSubmit) {
      await onSubmit(data);
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-6" noValidate>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2 pt-1.5">
          <label htmlFor="fullName" className="font-sans text-xs font-medium leading-[14px] tracking-[0] text-[#42474d]">
            FULL NAME
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your name"
            {...register('fullName')}
            className="rounded-none border border-[#c2c7ce] bg-[#f4f7f9] px-4 py-3.5 font-sans text-base font-normal text-[#1a1c1e] placeholder:text-gray-400 focus:outline-none focus:border-[#00273d] transition-colors"
          />
          {errors.fullName && (
            <p className="font-sans text-xs text-red-500">{errors.fullName.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 pt-1.5">
          <label htmlFor="email" className="font-sans text-xs font-medium leading-[14px] tracking-[0] text-[#42474d]">
            EMAIL ADDRESS
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@company.com"
            {...register('email')}
            className="rounded-none border border-[#c2c7ce] bg-[#f4f7f9] px-4 py-3.5 font-sans text-base font-normal text-[#1a1c1e] placeholder:text-gray-400 focus:outline-none focus:border-[#00273d] transition-colors"
          />
          {errors.email && (
            <p className="font-sans text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-1.5">
        <label htmlFor="interest" className="font-sans text-xs font-medium leading-[14px] tracking-[0] text-[#42474d]">
          INTEREST
        </label>
        <select
          id="interest"
          {...register('interest')}
          className="rounded-none border border-[#c2c7ce] bg-[#f4f7f9] px-4 py-3.5 font-sans text-base font-normal text-[#1a1c1e] focus:outline-none focus:border-[#00273d] transition-colors appearance-none cursor-pointer"
        >
          {INTEREST_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.interest && (
          <p className="font-sans text-xs text-red-500">{errors.interest.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2 pt-1.5">
        <label htmlFor="message" className="font-sans text-xs font-medium leading-[14px] tracking-[0] text-[#42474d]">
          MESSAGE
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="How can we help you?"
          {...register('message')}
          className="rounded-none border border-[#c2c7ce] bg-[#f4f7f9] px-4 py-3 font-sans text-base font-normal leading-6 text-[#1a1c1e] placeholder:text-gray-400 focus:outline-none focus:border-[#00273d] transition-colors resize-none"
        />
        {errors.message && (
          <p className="font-sans text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {isSubmitSuccessful && (
        <div className="rounded-none bg-[#006d3d]/10 border border-[#006d3d]/30 px-4 py-3">
          <p className="font-sans text-sm text-[#006d3d] font-medium">
            Thank you! Your inquiry has been sent. We'll be in touch shortly.
          </p>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full py-4 text-sm font-bold tracking-[0.70px]"
      >
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
      </Button>
    </form>
  );
}
