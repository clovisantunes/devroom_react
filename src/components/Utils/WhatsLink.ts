function WhatsAppLink() {
    const phoneNumber = "5551981399275";
    const customMessage = "Olá! Estou interessado em saber mais informações sobres os planos de desenvolvimento.";
    const encodeMessage = (message: string) => {
      return encodeURIComponent(message);
    };
  const link = `https://api.whatsapp.com/send?1=pt_BR&phone=${phoneNumber}&text=${encodeMessage(customMessage)}`;
  return window.open(link, "_blank");
}   

export { WhatsAppLink };