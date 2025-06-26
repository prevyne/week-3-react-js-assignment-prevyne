import React, { useState } from 'react';
import { ThemeProvider } from '../context/ThemeProvider';
import { Layout } from './components/Layout';
import TaskManager from '../pages/TaskManager';
import ApiDataViewer from '../pages/ApiDataViewer';

export default function App() {
  // Simulate routing since React Router is not part of the initial setup
  const [currentPage, setCurrentPage] = useState('tasks'); // 'tasks' or 'api'

  return (
    <ThemeProvider>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        {currentPage === 'tasks' && <TaskManager />}
        {currentPage === 'api' && <ApiDataViewer />}
      </Layout>
    </ThemeProvider>
  );
}