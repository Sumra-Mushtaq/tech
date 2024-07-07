// Function to fetch patient data from the API
async function fetchPatientData() {
    try {
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching patient data:', error);
    }
}

// Function to populate the patient list
function populatePatientList(patients) {
    const patientList = document.querySelector('.patient-list');
    patientList.innerHTML = '';
    patients.forEach(patient => {
        const patientElement = document.createElement('div');
        patientElement.textContent = `${patient.name} - ${patient.gender}, ${patient.age}`;
        patientList.appendChild(patientElement);
    });
}

// Function to display patient details
function displayPatientDetails(patient) {
    // Update the main content area with patient details
    // This will include updating diagnosis history, lab results, and personal information
}

// Main function to initialize the application
async function initApp() {
    const patientData = await fetchPatientData();
    populatePatientList(patientData);
    
    // Add event listeners for patient selection
    document.querySelector('.patient-list').addEventListener('click', (event) => {
        const selectedPatient = patientData.find(patient => patient.name === event.target.textContent.split(' - ')[0]);
        if (selectedPatient) {
            displayPatientDetails(selectedPatient);
        }
    });
}

// Call the main function when the page loads
window.addEventListener('load', initApp);