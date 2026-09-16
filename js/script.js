
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", navLinks.classList.contains("open"));
  });
}
document.querySelectorAll(".nav-links a").forEach(a=>{
  a.addEventListener("click",()=>navLinks?.classList.remove("open"));
});

const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach(a=>{
  const href = a.getAttribute("href");
  if(href === current || (current === "" && href === "index.html")) a.classList.add("active");
});

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const form = document.querySelector("#contactForm");
const toast = document.querySelector(".toast");
if(form){
  form.addEventListener("submit", e=>{
    e.preventDefault();
    if(toast){
      toast.textContent = "Demo form submitted — connect your email service to receive real messages.";
      toast.style.display = "block";
      setTimeout(()=>toast.style.display="none", 4200);
    }
    form.reset();
  });
}

document.querySelectorAll("[data-year]").forEach(el=>{
  el.textContent = new Date().getFullYear();
});
