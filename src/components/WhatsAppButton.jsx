import { FaWhatsapp } from 'react-icons/fa'; // Ensure you have react-icons installed

const WhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = '+923153933660'; // Replace with your WhatsApp number in international format
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5">
      <button
        onClick={handleClick}
        className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl"
        style={{
          perspective: '1000px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        <FaWhatsapp className="text-3xl transform rotate-12" />
      </button>
    </div>
  );
};

export default WhatsAppButton;