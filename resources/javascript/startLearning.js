const courses = {
    software: {
        pic: `${imagesPath}/course-software.jpg`,
        h4: 'Software engineering',
        topics: 'Web Development, Mobile, Development, iOT, APIs'
    },
    computerArt: {
        pic: `${imagesPath}/course-computer-art.jpg`,
        h4: 'Computer art',
        topics: 'Imaging & Design, Web Design, Motion Graphics & Visual Effects, Computer Animation'
    },
    design: {
        pic: `${imagesPath}/course-design.jpg`,
        h4: 'Design',
        topics: 'User Experience Design, User Research, Visual Design'
    },
    data: {
        pic: `${imagesPath}/course-data.jpg`,
        h4: 'Data',
        topics: 'Data Science, Big Data, SQL, Data Visualization'
    },
    business: {
        pic: `${imagesPath}/course-business.jpg`,
        h4: 'Business',
        topics: 'Product Development, Business Development, Startup'
    },
    marketing: {
        pic: `${imagesPath}/course-marketing.jpg`,
        h4: 'Marketing',
        topics: 'Analytics, Content Marketing, Mobile Marketing'
    }
}

const coursesBox = document.getElementById('courses');

for (const courseInfo of Object.values(courses)) {
    // Course container
    const course = document.createElement('div');
    course.className = 'course';
        // Image
        const courseImage = document.createElement('div');
        courseImage.style.backgroundImage = `url(${courseInfo.pic})`;
        courseImage.style.minHeight = '200px';
        courseImage.style.backgroundRepeat = 'no-repeat';
        courseImage.style.backgroundSize = 'cover';
        courseImage.style.marginBottom = '16px';
        // Title
        const courseTitle = document.createElement('h4');
        courseTitle.innerHTML = courseInfo.h4;
        // Subitle
        const courseSubTitle = document.createElement('p');
        courseSubTitle.innerHTML = 'COURSES';
        // Text
        const courseText = document.createElement('p');
        courseText.innerHTML = courseInfo.topics;
    // Add childs to course
    course.appendChild(courseImage);
    course.appendChild(courseTitle);
    course.appendChild(courseSubTitle);
    course.appendChild(courseText);
    // Add everything to the courses div
    coursesBox.appendChild(course)
};