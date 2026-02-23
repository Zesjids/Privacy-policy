const featuresText = document.getElementById('features-text');
const intelligenceText = document.getElementById('intelligence-text');
const contactText = document.getElementById('contact-text');
const featureSection = document.getElementById('features-div');
const intelligenceSection = document.getElementById('intelligence-div');
const contactSection = document.getElementById('contact-div');

featuresText.addEventListener('click', () => {
  featureSection.scrollIntoView({
    behaviour:"smooth",
    block: "center"})
})

intelligenceText.addEventListener('click', () => {
  intelligenceSection.scrollIntoView({
    behaviour:"smooth",
    block: "center"})
})
contactText.addEventListener('click', () => {
  contactSection.scrollIntoView({
    behaviour:"smooth",
    block: "center"})
})