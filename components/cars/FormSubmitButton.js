'use client';

import { useFormStatus } from 'react-dom';
export default function FormSubmitButton() {
  const { pending } = useFormStatus();
  return <button type='submit'>{pending ? 'Submiting...' : 'submit'}</button>;
}
