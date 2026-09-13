const result = document.getElementById("result");
const input = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const contactName = document.querySelector(".contact-name");
const contactPhone = document.querySelector(".contact-phone");
const contactAvatar = document.querySelector(".contact-avatar");
const suggestions = document.querySelectorAll(".suggestion-item");

const contatos = [
    { nome: "João", telefone: "(11) 1234-5678" },
    { nome: "Maria", telefone: "(21) 9876-5432" },
    { nome: "Pedro", telefone: "(31) 4567-8901" },
    { nome: "Ana", telefone: "(41) 7891-2345" },
    { nome: "Lucas", telefone: "(51) 3216-5498" }
];

function renderContact(contact) {
    contactName.textContent = contact.nome;
    contactPhone.textContent = contact.telefone;
    contactAvatar.textContent = contact.nome.charAt(0).toUpperCase();
    result.textContent = "Contato encontrado com sucesso.";
    result.className = "result-message success";
}

function search() {
    const query = input.value.trim();

    if (query === "") {
        contactName.textContent = "Resultado";
        contactPhone.textContent = "Nenhum contato encontrado";
        contactAvatar.textContent = "?";
        result.textContent = "Digite um nome para buscar.";
        result.className = "result-message";
        return;
    }

    const contact = contatos.find((item) =>
        item.nome.toLocaleLowerCase() === query.toLocaleLowerCase()
    );

    if (contact) {
        renderContact(contact);
    } else {
        contactName.textContent = "Contato";
        contactPhone.textContent = "Não localizado";
        contactAvatar.textContent = "!";
        result.textContent = "Contato não encontrado.";
        result.className = "result-message";
    }
}

searchButton.addEventListener("click", search);
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        search();
    }
});

suggestions.forEach((item) => {
    item.addEventListener("click", () => {
        input.value = item.dataset.name;
        search();
    });
});
