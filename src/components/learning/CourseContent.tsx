import React from 'react';
import { Play, File, Clock, Download } from 'lucide-react';

interface Module {
  id: number;
  title: string;
  duration: string;
  lessons: {
    id: number;
    title: string;
    type: 'video' | 'document';
    duration?: string;
    preview?: boolean;
  }[];
}

interface CourseContentProps {
  modules: Module[];
}

export default function CourseContent({ modules }: CourseContentProps) {
  return (
    <div className="space-y-6">
      {modules.map((module) => (
        <div key={module.id} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Module {module.id}: {module.title}</h3>
            <span className="text-sm text-gray-500">
              <Clock className="h-4 w-4 inline mr-1" />
              {module.duration}
            </span>
          </div>

          <div className="space-y-3">
            {module.lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  {lesson.type === 'video' ? (
                    <Play className="h-5 w-5 text-blue-900" />
                  ) : (
                    <File className="h-5 w-5 text-blue-900" />
                  )}
                  <div>
                    <h4 className="font-medium">{lesson.title}</h4>
                    {lesson.duration && (
                      <span className="text-sm text-gray-500">{lesson.duration}</span>
                    )}
                  </div>
                </div>
                
                {lesson.preview ? (
                  <button className="text-sm text-blue-900 hover:text-blue-700">
                    Aperçu gratuit
                  </button>
                ) : (
                  <Download className="h-4 w-4 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}