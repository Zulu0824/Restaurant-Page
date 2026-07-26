import { contentBox } from "./home.js";

const contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", () => {
    contentBox.textContent = "";

    const contactBox = document.createElement("div");
    contactBox.id = "contact-box";

    const header = document.createElement("div");
    header.id = "contact-header";
    header.innerHTML = `
    <h4 id="contact-heading-text">GET IN TOUCH</h4>
    <p id="contact-sub-text">We'd love to hear from you — reach out or stop by.</p>`;

    const infoSection = document.createElement("div");
    infoSection.id = "contact-info";
    infoSection.innerHTML = `
    <div class="contact-item">
        <span class="contact-label">Phone</span>
        <a class="contact-value" href="tel:+15552348890">(555) 234-8890</a>
    </div>
    <div class="contact-item">
        <span class="contact-label">Email</span>
        <a class="contact-value" href="mailto:hello@pataka.com">hello@pataka.com</a>
    </div>`;

    const newsletter = document.createElement("div");
    newsletter.id = "newsletter";
    newsletter.innerHTML = `
    <h3 class="contact-subheading">Join Our Newsletter</h3>
    <p id="newsletter-subtext">Get updates on new dishes, events, and special offers.</p>`;

    contactBox.append(header, infoSection, newsletter);
    contentBox.appendChild(contactBox);
});