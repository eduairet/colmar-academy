const imagesPath = './resources/images';

const infoBlocks = {
    orientation: {
        pic: `${imagesPath}/information-orientation.jpg`,
        picMobile: `${imagesPath}/information-orientation-mobile.jpg`,
        h4: 'Orientation date',
        p: 'Tue 10/11 & Wed 10/11: 8:00am-3:00pm',
        readMore: '#'
    },
    ourCampus: {
        pic: `${imagesPath}/information-campus.jpg`,
        picMobile: `${imagesPath}/information-campus-mobile.jpg`,
        h4: 'Our campus',
        p: 'Find which campus is close to you',
        readMore: '#'
    },
    guestLecture: {
        pic: `${imagesPath}/information-guest-lecture.jpg`,
        picMobile: `${imagesPath}/information-guest-lecture-mobile.jpg`,
        h4: 'Our guest lecture',
        p: 'Join a keynote with Oliver Sack about music in medical treatment',
        readMore: '#'
    }
}

const secondMainInfo = document.getElementById('second-main-info');

for (const infoBlock of Object.values(infoBlocks)) {
    // Container block
    const mainInfoEl = document.createElement('div');
    mainInfoEl.className = 'info-el';
        // Picture
        const mainInfoElPicture = document.createElement('div');
        mainInfoElPicture.className = 'info-el-picture';
        mainInfoElPicture.style.backgroundImage = `url(${infoBlock.pic})`;
        mainInfoElPicture.id = infoBlock.pic.replace('.jpg', '')
        // Info block
        const mainInfoElInfo = document.createElement('div');
        mainInfoElInfo.className = 'info-el-info';
            // h4
            const mainInfoElInfoTitle = document.createElement('h4');
            mainInfoElInfoTitle.innerHTML = infoBlock.h4;
            // p
            const mainInfoElInfoText = document.createElement('p');
            mainInfoElInfoText.innerHTML = infoBlock.p;
            // a
            const readMore = document.createElement('a');
            readMore.href = infoBlock.readMore;
            readMore.innerHTML = 'Read more';
        // Append to info block
        mainInfoElInfo.appendChild(mainInfoElInfoTitle);
        mainInfoElInfo.appendChild(mainInfoElInfoText);
        mainInfoElInfo.appendChild(readMore);
    // Append to main info element
    mainInfoEl.appendChild(mainInfoElPicture);
    mainInfoEl.appendChild(mainInfoElInfo);
    // Append to second main info
    secondMainInfo.appendChild(mainInfoEl);
}
