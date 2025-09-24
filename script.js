document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');
    const passwordInput = document.getElementById('password-input');
    const loginPage = document.getElementById('login-page');
    const anniversaryPage = document.getElementById('anniversary-page');
    const blessingPage = document.getElementById('blessing-page');
    const errorMessage = document.getElementById('error-message');
    const nextPageButton = document.getElementById('next-page-button');
    const backToGalleryButton = document.getElementById('back-to-gallery-button');

    // กำหนดรหัสผ่าน
    // เปลี่ยน '0101' เป็นรหัสวันเกิดที่คุณต้องการ
    const correctPassword = 'โรงยิม'; 

    loginButton.addEventListener('click', function() {
        const enteredPassword = passwordInput.value;
        if (enteredPassword === correctPassword) {
            loginPage.classList.remove('active');
            anniversaryPage.classList.add('active');
        } else {
            errorMessage.textContent = 'รหัสผ่านไม่ถูกต้อง คิดดีๆสิ';
        }
    });

    // ให้สามารถกด Enter ได้
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            loginButton.click();
        }
    });

    // ปุ่มสำหรับไปหน้าคำอวยพร
    nextPageButton.addEventListener('click', function() {
        anniversaryPage.classList.remove('active');
        blessingPage.classList.add('active');
    });

    // ปุ่มสำหรับกลับไปหน้าแกลเลอรี
    backToGalleryButton.addEventListener('click', function() {
        blessingPage.classList.remove('active');
        anniversaryPage.classList.add('active');
    });
});