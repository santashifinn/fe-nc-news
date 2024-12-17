const Footer = () => {
  return (
    <footer className="footer">
      <p>© Santashi Finn {/\d{4}/.exec(Date())[0]}</p>
    </footer>
  );
};

export default Footer;
