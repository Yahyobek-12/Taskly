const Footer = () => {
    return (
      <footer className="mt-12 z-20 border-t-2 border-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-blue-600">
            <h1 className="text-3xl font-bold">Taskly</h1>
          </div>
  
          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repellendus!
          </p>
  
          <nav aria-label="Footer Nav" className="mt-12">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="/">About</a>
              </li>
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="/">Blog</a>
              </li>
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="/">Projects</a>
              </li>
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="/">Contact</a>
              </li>
            </ul>
          </nav>
  
          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <a href="/" className="text-gray-700 transition hover:text-gray-700/75">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2.25C6.615 2.25 2.25 6.615 2.25 12c0 4.976 3.657 9.073 8.438 9.822v-6.943H8.172V12h2.516V9.797c0-2.492 1.488-3.854 3.758-3.854 1.088 0 2.222.192 2.222.192v2.438h-1.252c-1.234 0-1.617.767-1.617 1.556V12h2.75l-.44 2.879h-2.31v6.943C18.093 21.073 21.75 16.976 21.75 12c0-5.385-4.365-9.75-9.75-9.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-700 transition hover:text-gray-700/75">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM3.5 7.75A4.25 4.25 0 017.75 3.5h8.5a4.25 4.25 0 014.25 4.25v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5zm13.75-2.75a.75.75 0 100 1.5.75.75 0 000-1.5zM12 7a5 5 0 100 10A5 5 0 0012 7zm-3.5 5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-700 transition hover:text-gray-700/75">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19.25 2.25A1.25 1.25 0 0120.5 3.5v17a1.25 1.25 0 01-1.25 1.25h-17A1.25 1.25 0 011 20.5v-17A1.25 1.25 0 012.25 2.25h17zM9.872 16.384c4.487 0 6.942-3.72 6.942-6.942 0-.106 0-.212-.003-.318a4.963 4.963 0 001.214-1.26 4.858 4.858 0 01-1.38.378 2.418 2.418 0 001.057-1.334 4.843 4.843 0 01-1.537.588 2.409 2.409 0 00-4.1 2.197 6.84 6.84 0 01-4.964-2.516 2.41 2.41 0 00.746 3.215 2.406 2.406 0 01-1.091-.3v.03c0 1.158.823 2.124 1.916 2.344a2.417 2.417 0 01-1.085.041 2.411 2.411 0 002.251 1.673 4.83 4.83 0 01-2.982 1.028 4.955 4.955 0 01-.575-.033 6.84 6.84 0 003.704 1.086z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-700 transition hover:text-gray-700/75">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2a10 10 0 00-3.162 19.492c.5.091.683-.217.683-.483 0-.238-.009-.868-.014-1.703-2.782.604-3.37-1.34-3.37-1.34-.455-1.155-1.11-1.463-1.11-1.463-.908-.621.069-.609.069-.609 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.089.636-1.34-2.221-.253-4.555-1.11-4.555-4.943 0-1.092.39-1.985 1.029-2.684-.103-.253-.446-1.276.098-2.66 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 7.966c.85.004 1.705.115 2.504.337 1.908-1.295 2.748-1.024 2.748-1.024.546 1.384.202 2.407.099 2.66.641.7 1.028 1.592 1.028 2.684 0 3.841-2.338 4.687-4.566 4.936.36.31.679.924.679 1.862 0 1.345-.012 2.428-.012 2.758 0 .268.181.579.688.481A10 10 0 0012 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  