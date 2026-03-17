/* ============================================================
   EMAIL-PROTECTION.JS - Email Obfuscation for Bot Protection
   ============================================================ */

(function() {
    // Decode obfuscated email
    function decodeEmail(encoded) {
        return encoded.split('').reverse().join('');
    }

    // Initialize email display on page load
    function initEmailProtection() {
        const emailElement = document.getElementById('obfuscated-email');
        if (!emailElement) return;

        // Obfuscated email (reversed)
        const obfuscatedEmail = 'moc.insilico@attudaras';
        const decodedEmail = decodeEmail(obfuscatedEmail);
        
        // Create email link safely
        const emailLink = document.createElement('a');
        emailLink.href = 'mailto:' + decodedEmail;
        emailLink.textContent = decodedEmail;
        emailLink.className = 'email-link';
        
        emailElement.appendChild(emailLink);
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEmailProtection);
    } else {
        initEmailProtection();
    }

})();
