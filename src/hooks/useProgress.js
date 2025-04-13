import { useState, useEffect } from 'react';

export const useProgress = (courseId) => {
  const [progress, setProgress] = useState({
    completion: 0,
    lastActivity: null,
    milestones: [],
    timeSpent: 0
  });

  useEffect(() => {
    // Simulate fetching progress data
    setProgress({
      completion: 65,
      lastActivity: new Date(),
      milestones: [
        { id: 1, name: 'Introduction', completed: true },
        { id: 2, name: 'Basics', completed: true },
        { id: 3, name: 'Advanced Topics', completed: false },
      ],
      timeSpent: 320 // minutes
    });
  }, [courseId]);

  const updateProgress = (newProgress) => {
    setProgress(prev => ({
      ...prev,
      ...newProgress,
      lastActivity: new Date()
    }));
  };

  return { progress, updateProgress };
};