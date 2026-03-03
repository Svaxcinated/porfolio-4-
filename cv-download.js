function downloadCV() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setFillColor(0, 0, 0);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(28);
    doc.text('SOPHIA VERHON PAGAL', 105, 20, { align: 'center' });
    doc.setFontSize(14);
    doc.text('Developer | IT Student', 105, 30, { align: 'center' });
    
    // Contact Info
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text('Email: pgssvap@gmail.com  |  Phone: 09918783695', 105, 50, { align: 'center' });
    doc.text('Location: San Miguel, Digos City, Davao del Sur, Philippines', 105, 56, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('ABOUT ME', 20, 70);
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    const aboutText = '21-year-old Information Technology student at University of Mindanao Digos College, exploring the endless possibilities of technology and its applications in solving real-world problems.';
    doc.text(aboutText, 20, 78, { maxWidth: 170 });
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('EDUCATION', 20, 100);
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text('University Of Mindanao Digos College', 20, 108);
    doc.setFontSize(10);
    doc.text('Bachelor of Science in Information Technology', 20, 114);
    doc.text('2022 - Present', 20, 120);
    
    doc.setFontSize(11);
    doc.text('University Of Mindanao Digos College - Senior High', 20, 130);
    doc.setFontSize(10);
    doc.text('2020 - 2022', 20, 136);
    
    doc.setFontSize(11);
    doc.text('Digos City National High School - Junior High', 20, 146);
    doc.setFontSize(10);
    doc.text('2016 - 2020', 20, 152);
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('SKILLS', 20, 170);
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text('HTML & CSS  •  JavaScript  •  PHP  •  MySQL  •  Firebase • Nodejs ', 20, 178);
    doc.text('Git & GitHub  •  Figma ', 20, 184);
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('PROJECTS', 20, 200);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('Fime Mobile Application', 20, 208);
    doc.setFontSize(10);
    doc.text('E-commerce mobile application with innovative features.', 20, 214);
    doc.text('Technologies: Android Studio, Java Native, Firebase', 20, 220);
    
    doc.setFontSize(12);
    doc.text('Higanteng Laagan Web Application', 20, 230);
    doc.setFontSize(10);
    doc.text('Travel and tours booking management system for systematic tour bookings.', 20, 236);
    doc.text('Technologies: PHP, JavaScript, MySQL, HTML & CSS', 20, 242);


    doc.setFontSize(12);
    doc.text('Intellect-Connect', 20, 230);
    doc.setFontSize(10);
    doc.text('A web-mobile based tutoring systems for Tutors and Elemenatry Students', 20, 236);
    doc.text('Technologies: Reactjs, Nodejs, Firebase, Flutter', 20, 242);
    
    doc.addPage();
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('CERTIFICATIONS', 20, 20);
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    
    let yPos = 28;
    const certs = [
        'Microsoft Certificate - Coursebank (2022)',
        'Designing Certificate - Coursebank (2022)',
        'Google Workspace Certificate - Coursebank (2022)',
        'Basic Programming - Greatlearning (2022)',
        'Installing and Configuring Computer Systems - TESDA (2022)',
        'Setting Up Computer Servers - TESDA (2025)',
        'Setting Up Computer Networks - TESDA (2025)',
        'Maintaining Computer System and Networks - TESDA (2025)',
        'Introduction To CSS - TESDA (2025)',
        'HTML&CSS - Information Technology Specialist (2026)',
        'DATABASE - Information Technology Specialist (2026)',

    ];
    
    certs.forEach(cert => {
        doc.text('• ' + cert, 20, yPos);
        yPos += 8;
    });
    
    // Save the PDF
    doc.save('Sophia_Pagal_CV.pdf');
}