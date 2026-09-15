import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Toast({ message, visible }) {
  return (
    <div className={`toast ${visible ? 'show' : ''}`}>
      <CheckCircle size={20} color="#5DCAA5" />
      <span>{message}</span>
    </div>
  );
}