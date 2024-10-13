// Open and close settings modal
document.getElementById('settings-btn').addEventListener('click', function() {
    document.getElementById('settings-modal').style.display = 'flex';
});

document.getElementById('close-settings-btn').addEventListener('click', function() {
    document.getElementById('settings-modal').style.display = 'none';
});

// Toggle dark mode
function toggleDarkMode() {
    var body = document.getElementById('body');
    var isDarkMode = document.getElementById('dark-mode').checked;
    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Change language
function changeLanguage() {
    var language = document.getElementById('language').value;
    if (language === 'ar') {
        document.querySelector('h1').innerText = 'مرحبا بك في بوت اذاعة القرأن الكريم';
        document.querySelector('.invite-btn').innerText = 'دعوة البوت';
        document.querySelector('.server-btn').innerText = 'الانضمام للسيرفر';
        document.getElementById('settings-btn').innerText = 'الإعدادات';
        document.querySelector('label[for="dark-mode"]').innerText = 'الوضع المظلم:';
        document.querySelector('label[for="language"]').innerText = 'اللغة:';
        document.getElementById('close-settings-btn').innerText = 'إغلاق';
    } else {
        document.querySelector('h1').innerText = 'Welcome to Quran Radio bot';
        document.querySelector('.invite-btn').innerText = 'Invite Bot';
        document.querySelector('.server-btn').innerText = 'Join Server';
        document.getElementById('settings-btn').innerText = 'Settings';
        document.querySelector('label[for="dark-mode"]').innerText = 'Dark Mode:';
        document.querySelector('label[for="language"]').innerText = 'Language:';
        document.getElementById('close-settings-btn').innerText = 'Close';
    }
}

// Invite bot function
function inviteBot() {
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=1253829065190670358';
}

// Join server function
function joinServer() {
    window.location.href = 'https://discord.gg/ewRKDHY8za';
}