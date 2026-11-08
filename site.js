// Abas de serviços e escolha de dia por profissional (monta a mensagem do WhatsApp).
const abas = [...document.querySelectorAll('[role="tab"]')];
abas.forEach((a) => a.addEventListener("click", () => {
  abas.forEach((x) => {
    x.setAttribute("aria-selected", String(x === a));
    document.getElementById(x.getAttribute("aria-controls")).hidden = x !== a;
  });
}));

const lista = document.querySelector(".profissionais ul");
const base = lista ? new URL(lista.dataset.whatsapp) : null;
document.querySelectorAll(".prof").forEach((prof) => {
  const nome = prof.dataset.nome;
  const link = prof.querySelector(".marcar");
  prof.querySelectorAll(".dias button").forEach((d) => d.addEventListener("click", () => {
    prof.querySelectorAll(".dias button").forEach((x) => x.setAttribute("aria-pressed", String(x === d)));
    const url = new URL(base);
    url.searchParams.set("text", `Oi! Quero marcar com a ${nome} na ${d.textContent}. Qual horário tem livre?`);
    link.href = url.toString();
    link.textContent = `Marcar com ${nome} na ${d.textContent}`;
  }));
});
