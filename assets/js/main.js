//Step register
let currentStep = 1;

function showStep(stepNumber) {
    // Masquer toutes les étapes
    document.querySelectorAll('.register-step').forEach(step => step.style.display = 'none');

    // Afficher l'étape actuelle
    document.getElementById(`step-${stepNumber}`).style.display = 'block';
}

function nextStep() {
    if (currentStep < 3) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

// Afficher la première étape au chargement de la page
showStep(currentStep);


function sub(){
    sub = document.getElementById('subm');
    sub.disabled = true;
    formu = document.getElementById('formu');
    formu.submit();
}