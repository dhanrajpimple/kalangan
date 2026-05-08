import React from 'react';
import { metadata } from './metadata';

export { metadata };

export default function ProductsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
