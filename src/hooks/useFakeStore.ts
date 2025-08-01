import { useState, useEffect } from 'react';
import { Product } from '../types/theme';

interface UseFakeStoreResult {
  products: Product[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useFakeStore = (limit?: number): UseFakeStoreResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const url = limit 
        ? `https://fakestoreapi.com/products?limit=${limit}`
        : 'https://fakestoreapi.com/products';
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching products');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [limit]); // eslint-disable-line react-hooks/exhaustive-deps

  const refetch = () => {
    fetchProducts();
  };

  return {
    products,
    loading,
    error,
    refetch,
  };
};