const Footer = () => {

    // display current year
    const year = new Date().getFullYear();

    return (
      <div className="bg-gradient-to-r from-orange via-rose to-violet-md border-double border-t-8 border-white flex flex-col items-center py-3.5">
        <p className="text-white text-center text-md hover:opacity-80">
          <a
            href="https://iamtusharmaurya.netlify.app/"
            title="Tushar Maurya Portfolio"
            target="_blank"
            rel="noreferrer"
          >
            {String.fromCharCode(169) + " " + year + "  @iamtusharmaurya ❤ "}
          </a>
        </p>
      </div>
    );
}

export default Footer;