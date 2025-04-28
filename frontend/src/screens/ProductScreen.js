import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductScreen() {
  const param = useParams();
  const { slug } = param;

  return <h1>{slug}</h1>;
}
