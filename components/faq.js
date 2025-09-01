
const faqData = [
  {
    question: "Comment puis-je passer une commande ?",
    answer: "Pour passer une commande, sélectionnez vos articles, ajoutez-les au panier et suivez les instructions de paiement."
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "Les délais de livraison varient entre 2 et 5 jours ouvrés selon votre localisation."
  },
  {
    question: "Puis-je retourner un article ?",
    answer: "Oui, vous pouvez retourner un article dans un délai de 14 jours après réception."
  },
  {
    question: "Comment suivre ma commande ?",
    answer: "Vous pouvez suivre votre commande via le lien de suivi envoyé par email après l'expédition."
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Nous acceptons les paiements par carte bancaire, PayPal et virement bancaire."
  }
];




function createFAQ(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const template = document.getElementById('faq-template');
  if (!template) return;

  data.forEach(item => {
   
    const faqNode = template.content.cloneNode(true);
    const faqItem = faqNode.querySelector('.faq-item');
    const question = faqItem.querySelector('.faq-question');
    const icon = faqItem.querySelector('.faq-icon');
    const text = faqItem.querySelector('.faq-text');
    const answer = faqItem.querySelector('.faq-answer');

    text.textContent = item.question;
    answer.textContent = item.answer;
    answer.style.display = 'none';
    icon.textContent = '+';

    question.addEventListener('click', function() {
      const allAnswers = container.querySelectorAll('.faq-answer');
      const allIcons = container.querySelectorAll('.faq-icon');
      allAnswers.forEach(ans => {
        if (ans !== answer) ans.style.display = 'none';
      });
      allIcons.forEach(ic => {
        if (ic !== icon) ic.textContent = '+';
      });
      if (answer.style.display === 'none') {
        answer.style.display = 'block';
        icon.textContent = '-';
      } else {
        answer.style.display = 'none';
        icon.textContent = '+';
      }
    });

    container.appendChild(faqItem);
  });
}
