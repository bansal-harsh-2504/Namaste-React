const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with Love by <strong>Harsh</strong>
      </p>
    </footer>
  );
};

export default Footer;