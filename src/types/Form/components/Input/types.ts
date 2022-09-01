import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  testId: string;
  name: string;
  id: string;
  error?: string;
  success?: string;
  placeholder: string;
}
