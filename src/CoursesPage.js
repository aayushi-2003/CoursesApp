import React, { useState } from 'react'; 
import Navbar from './Navbar';
import AllCoursesTable from './AllCoursesTable';
import EditCoursePopup from './EditCoursePopup';

const coursesList = [
  { id: 1, title: "Math 101", details: "Basic Mathematics", semester: "Fall", enrollStatus: false },
  { id: 2, title: "Physics 101", details: "Intro to Physics", semester: "Spring", enrollStatus: false },
  { id: 3, title: "Chemistry 101", details: "Intro to Chemistry", semester: "Fall", enrollStatus: false },
];

const CoursesPage = () => {
  const [activeTab, setActiveTab] = useState('allCourses');
  const [myCourses, setMyCourses] = useState([]);
  const [editCourse, setEditCourse] = useState(null);

  const handleEnroll = (course) => {
    if (!myCourses.some((c) => c.id === course.id)) {
      course.enrollStatus = true; 
      setMyCourses([...myCourses, course]);
    }
  };

  const handleUnenroll = (course) => {
    course.enrollStatus = false;
    setMyCourses(myCourses.filter((c) => c.id !== course.id));
  };

  const handleEditCourse = (course) => {
    setEditCourse(course); // Open edit popup
  };

  const handleSaveEdit = (updatedCourse) => {
    setMyCourses(myCourses.map(c => c.id === updatedCourse.id ? updatedCourse : c));
    setEditCourse(null); // Close edit popup
  };

  return (
    <div>
      <Navbar />
      <div className='container mx-auto pt-24 px-10 '>        
        <div className="tabs flex items-center justify-start gap-x-6 text border-b-2">
          <button
            className={`tab ${activeTab === 'allCourses' ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab('allCourses')}
          >
            All Courses
          </button>
          <button
            className={`tab ${activeTab === 'myCourses' ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab('myCourses')}
          >
            My Courses
          </button>
        </div>

        <div className="mt-6">
          {activeTab === 'allCourses' ? (
            <AllCoursesTable
              courses={coursesList}
              showActionButton={true}
              onActionClick={handleEnroll}
              actionText="Enroll"
            />
          ) : (
            <AllCoursesTable
              courses={myCourses}
              showActionButton={false} 
              onUnenrollClick={handleUnenroll}
              onEditClick={handleEditCourse}
            />
          )}
        </div>

        {editCourse && (
          <EditCoursePopup
            course={editCourse}
            onClose={() => setEditCourse(null)}
            onSave={handleSaveEdit}
          />
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
