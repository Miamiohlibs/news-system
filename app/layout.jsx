import "/styles/globals.css";

import Nav from "/components/Nav";

export const metadata = {
  title: "Miami University Libraries - News & Events",
  description: "ULB News and Events Page",
};

const RootLayout = () => {
  return (
    <html lang="en">
      <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
          </main>
      </body>
    </html>
  );
};

export default RootLayout;
