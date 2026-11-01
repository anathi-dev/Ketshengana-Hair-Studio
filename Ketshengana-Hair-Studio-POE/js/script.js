document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Dynamic Deposit Calculator (Booking Page)
    const serviceSelect = document.getElementById("service");
    const totalPriceEl = document.getElementById("total-price");
    const depositEl = document.getElementById("deposit-amount");
    
    if (serviceSelect) {
        serviceSelect.addEventListener("change", function() {
            const price = parseInt(this.value) || 0;
            const deposit = price * 0.50; // 50% deposit calculation
            
            // Only display if a valid service is selected
            if(price > 0) {
                totalPriceEl.textContent = `R${price}`;
                depositEl.textContent = `R${deposit}`;
            } else {
                totalPriceEl.textContent = `R0`;
                depositEl.textContent = `R0`;
            }
        });
    }

    // 2. Form Validation & Feedback (Booking Form)
    const bookingForm = document.getElementById("booking-form");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent page reload
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const service = serviceSelect.options[serviceSelect.selectedIndex].text;
            const feedback = document.getElementById("form-feedback");
            const depositAmount = depositEl.textContent;
            
            // Validation logic
            if (name.length < 2 || !email.includes("@")) {
                feedback.textContent = "Error: Please enter a valid name and email address.";
                feedback.style.color = "red";
            } else if (serviceSelect.value == "0") {
                feedback.textContent = "Error: Please select a hair style.";
                feedback.style.color = "red";
            } else {
                // Success simulation
                feedback.textContent = `Thank you, ${name}! Your booking for ${service} is pending. Please send your deposit of ${depositAmount} via WhatsApp to confirm.`;
                feedback.style.color = "var(--primary-purple)";
                feedback.style.fontWeight = "bold";
                bookingForm.reset();
                totalPriceEl.textContent = `R0`;
                depositEl.textContent = `R0`;
            }
        });
    }

    // 3. Contact Form Validation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Thank you for your message! Anathi will get back to you shortly.");
            contactForm.reset();
        });
    }
});