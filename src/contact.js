import "./css/contact.css";

const createForm = () => {
  const content = document.getElementById("content");

	const formDiv = document.createElement("div");
	content.appendChild(formDiv);
	
  const form = document.createElement("form");
  form.id = "form";
  formDiv.appendChild(form);

  const mainHeader = document.createElement("h1");
  mainHeader.textContent = "CONTACT US";
  form.appendChild(mainHeader);

  const addressAndNum = document.createElement("p");
  addressAndNum.id = "address-and-num";
  addressAndNum.textContent = "1234 N. Rocky Point Dr,\r\n";
  addressAndNum.textContent += "Tampa, FL 33607\r\n";
  addressAndNum.textContent += "(813) 123-1234";
  form.appendChild(addressAndNum);

  const header = document.createElement("h2");
  header.className = "header";
  header.textContent = "GET IN TOUCH";
  form.appendChild(header);

  const subHeader = document.createElement("p");
  subHeader.className = "subheader";
  subHeader.textContent = "We look forward to hearing from you!";
  form.appendChild(subHeader);

  const inputSection = document.createElement("section");
  form.appendChild(inputSection);

  const formFieldset = document.createElement("fieldset");
  formFieldset.className = "form-fieldset";
  inputSection.appendChild(formFieldset);

  const legend = document.createElement("legend");
  legend.innerText = "Contact Form";
  formFieldset.appendChild(legend);

  const nameDiv = document.createElement("div");
  nameDiv.className = "input-div";
  formFieldset.appendChild(nameDiv);

  const nameLabel = document.createElement("span");
  nameLabel.textContent = "Name";
  nameDiv.appendChild(nameLabel);

  const nameRequired = document.createElement("span");
  nameRequired.className = "required";
  nameRequired.textContent = " - Required";
  nameDiv.appendChild(nameRequired);

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.name = "name";
  nameInput.title = "Please enter your name.";
  nameInput.placeholder = "Name";
  nameInput.required = true;
  nameInput.ariaLabel = "Name Required";
  nameDiv.appendChild(nameInput);

  const emailDiv = document.createElement("div");
  emailDiv.className = "input-div";
  formFieldset.appendChild(emailDiv);

  const emailLabel = document.createElement("span");
  emailLabel.textContent = "Email";
  emailDiv.appendChild(emailLabel);

  const emailRequired = document.createElement("span");
  emailRequired.className = "required";
  emailRequired.textContent = " - Required";
  emailDiv.appendChild(emailRequired);

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "email";
  emailInput.name = "email";
  emailInput.title =
    "Please enter a valid email address. (e.g.johnsmith@email.com";
  emailInput.placeholder = "Email";
  emailInput.required = true;
  emailInput.ariaLabel = "Email Required";
  emailDiv.appendChild(emailInput);

  const phoneDiv = document.createElement("div");
  phoneDiv.className = "input-div";
  formFieldset.appendChild(phoneDiv);

  const phoneLabel = document.createElement("span");
  phoneLabel.textContent = "Phone Number";
  phoneDiv.appendChild(phoneLabel);

  const phoneRequired = document.createElement("span");
  phoneRequired.className = "required";
  phoneRequired.textContent = " - Required";
  phoneDiv.appendChild(phoneRequired);

  const phoneInput = document.createElement("input");
  phoneInput.type = "tel";
  phoneInput.id = "phone";
  phoneInput.name = "phone";
  phoneInput.pattern = "^(1-)?\\d{3}(-)?\\d{3}(-)?\\d{4}$";
  phoneInput.title =
    "Please enter a 10 digit phone number. (e.g. 123-456-7890) Dashes optional.";
  phoneInput.placeholder = "Phone Number";
  phoneInput.required = true;
  phoneInput.ariaLabel = "Phone Required";
  phoneDiv.appendChild(phoneInput);

  const reasonDiv = document.createElement("div");
  reasonDiv.id = "reason-div";
  reasonDiv.className = "input-div";
  formFieldset.appendChild(reasonDiv);

  const reasonLabel = document.createElement("span");
  reasonLabel.textContent = "What are you getting in touch about?";
  reasonDiv.appendChild(reasonLabel);

  const reasonRequired = document.createElement("span");
  reasonRequired.className = "required";
  reasonRequired.textContent = " - Optional";
  reasonDiv.appendChild(reasonRequired);

  const reason = document.createElement("select");
  reason.id = "reason";
  reason.name = "reason";
  reasonDiv.appendChild(reason);

  const optGroup = document.createElement("optgroup");
  optGroup.label = "What are you getting in touch about?";
  reason.appendChild(optGroup);

  const general = document.createElement("option");
  general.value = "general";
  general.textContent = "General Inquiry";
  optGroup.appendChild(general);

  const press = document.createElement("option");
  press.value = "press";
  press.textContent = "Press Inquiry";
  optGroup.appendChild(press);

  const messageDiv = document.createElement("div");
  messageDiv.className = "input-div";
  formFieldset.appendChild(messageDiv);

  const messageLabel = document.createElement("span");
  messageLabel.textContent = "Your message";
  messageDiv.appendChild(messageLabel);

  const messageRequired = document.createElement("span");
  messageRequired.className = "required";
  messageRequired.textContent = " - Required";
  messageDiv.appendChild(messageRequired);

  const message = document.createElement("textarea");
  message.id = "textarea";
  message.name = "textarea";
  message.placeholder = "Message";
  message.required = true;
  messageDiv.appendChild(message);

  const submitSection = document.createElement("section");
  submitSection.id = "submit-section";
  form.appendChild(submitSection);

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "SEND";
  submitBtn.type = "submit";
  submitBtn.setAttribute("form", "form");
  submitSection.appendChild(submitBtn);

  return content;
};

export default function renderForm() {
  document.body.appendChild(createForm());
}
