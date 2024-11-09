import React from 'react';

const CoursesTable = ({ courses, showActionButton, onActionClick, actionText, onUnenrollClick, onEditClick }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="border px-4 py-2">Title</th>
          <th className="border px-4 py-2">Details</th>
          <th className="border px-4 py-2">Semester</th>
          {showActionButton && <th className="border px-4 py-2">Status</th>}
          {onUnenrollClick && <th className="border px-4 py-2">Unenroll</th>}
          {onEditClick && <th className="border px-4 py-2">Edit</th>}
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course.id}>
            <td className="border px-4 py-2">{course.title}</td>
            <td className="border px-4 py-2">{course.details}</td>
            <td className="border px-4 py-2">{course.semester}</td>
            {showActionButton && (
              <td className="border px-4 py-2">
                <button
                  className={`${course.enrollStatus ? 'bg-secondary-blue' : 'bg-accent'} text-white px-4 py-2 rounded`}
                  onClick={() => onActionClick(course)}
                  disabled={course.enrollStatus}
                >
                  {course.enrollStatus ? 'Enrolled' : actionText}
                </button>
              </td>
            )}
            {onUnenrollClick && (
              <td className="border px-4 py-2">
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => onUnenrollClick(course)}>
                  Unenroll
                </button>
              </td>
            )}
            {onEditClick && (
              <td className="border px-4 py-2">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => onEditClick(course)}>
                  Edit
                </button>
              </td>
            )}
          </tr>
        ))}
        {courses.length === 0 && (
          <tr>
            <td className="border px-4 py-2" colSpan={5}>No courses available.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CoursesTable;
