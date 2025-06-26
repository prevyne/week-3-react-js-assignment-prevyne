import React, { useState, useEffect } from 'react';
import { Button } from '../src/components/Button';
import { Card } from '../src/components/Card';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
const POSTS_PER_PAGE = 10;

const ApiDataViewer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_BASE_URL}/posts?_page=${page}&_limit=${POSTS_PER_PAGE}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setPosts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [page]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <Card>
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">API Data Viewer</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 mb-6 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {loading && <p className="text-center text-xl">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.length > 0 ? filteredPosts.map(post => (
              <Card key={post.id} className="bg-gray-50 dark:bg-gray-700">
                <h2 className="text-xl font-bold mb-2 capitalize">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
              </Card>
            )) : <p className="md:col-span-2 text-center text-gray-500">No posts found.</p>}
          </div>
          <div className="flex justify-between mt-8">
            <Button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Previous</Button>
            <span className="self-center">Page {page}</span>
            <Button onClick={() => setPage(p => p + 1)}>Next</Button>
          </div>
        </>
      )}
    </Card>
  );
};
export default ApiDataViewer;