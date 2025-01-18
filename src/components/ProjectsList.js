import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProjectsList({projects}) {
  const router = useNavigate();
  return (
    <div className="px-8 mb-8 flex flex-col gap-3">
      {projects &&
        projects.length > 0 &&
        projects?.map((project, index) => (
          <div
            key={index}
            onClick={() => router(`/dashboard/schema/${project._id}`)}
            className="bg-black bg-opacity-10 flex-wrap text-text-normal flex flex-row justify-between items-center p-8 py-4 border border-border-light rounded-lg transition-all duration-300 ease-in-out hover:border-theme-color-primary cursor-pointer"
          >
            <h1 className="text-xl font-bold">{project.project_name}</h1>
            <p className="text-base">{new Date(project.createdAt).toDateString() + " / " + new Date(project.createdAt).toLocaleTimeString()}</p>
          </div>
        ))}
    </div>
  )
}
