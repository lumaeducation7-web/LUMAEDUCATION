// વિષય વાઇઝ ડાઉનલોડ મેસેજ
function downloadMaterial(subjectName) {
    alert(subjectName + " ડાઉનલોડ થઈ રહ્યું છે...\n\n(આભાર તમારા અભ્યાસ માટે Luma Education પસંદ કરવા બદલ!,આગળ પણ અમારી વેબસાઇટ પર આવો અને વધુ મટીરીયલ્સ ડાઉનલોડ કરો.)");
}

// સ્મૂધ સ્ક્રોલિંગ ઇફેક્ટ
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});