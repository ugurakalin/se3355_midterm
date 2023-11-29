document.getElementById('appointment-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Fetch city and course type data from mock API
    const cities = await fetch('https://designer.mocky.io/cities').then(response => response.json());
    const courseTypes = await fetch('https://designer.mocky.io/courseTypes').then(response => response.json());

    // Fill the drop downs with data
    const citySelect = document.getElementById('city');
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });

    const courseTypeSelect = document.getElementById('course-type');
    courseTypes.forEach(courseType => {
        const option = document.createElement('option');
        option.value = courseType;
        option.textContent = courseType;
        courseTypeSelect.appendChild(option);
    });

    // Fetch location based on selected city and submit form data
    const selectedCity = citySelect.options[citySelect.selectedIndex].value;
    const selectedCourseType = courseTypeSelect.options[courseTypeSelect.selectedIndex].value;
    const selectedLocation = document.getElementById('location').value;
    const locationData = await fetch(`https://designer.mocky.io/location?city=${selectedCity}&location=${selectedLocation}&courseType=${selectedCourseType}`).then(response => response.json());

    console.log('Form submitted successfully.', locationData);
});