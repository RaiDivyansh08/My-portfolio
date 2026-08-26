import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './ThemeProvider'
const outfit = Outfit({
  
  subsets: ["latin"],weight:["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"],weight:["400"]
});

export const metadata = {
  title: "Portfolio - Divyansh Rai",
  description: "MERN Stack Developer",
  //  icons: {
  //   icon: [
  //     {
  //       url: "/icon4.png",
  //       media: "(prefers-color-scheme: light)",
  //     },
  //     {
  //       url: "/icon5.png",
  //       media: "(prefers-color-scheme: dark)",
  //     },
  //   ],
  // },
  icons: {
  icon: "/icon4.png",
},
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` scroll-smooth dark`}
    >
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
      <ThemeProvider>
        {children}
      <script
  dangerouslySetInnerHTML={{
    __html: `
      const icons = ["/icon4.png", "/icon5.png"];
      let current = 0;

      // Preload
      icons.forEach(src => {
        const img = new Image();
        img.src = src;
      });

      function changeIcon() {
        const favicon = document.querySelector('link[rel="icon"]');

        if (!favicon) return;

        // Quick bounce-like sequence
        const sequence = [
          icons[current],
          icons[current],
          icons[current === 0 ? 1 : 0],
          icons[current === 0 ? 1 : 0]
        ];

        let step = 0;

        const bounce = setInterval(() => {
          favicon.href = sequence[step];
          step++;

          if (step >= sequence.length) {
            clearInterval(bounce);
            current = current === 0 ? 1 : 0;
          }
        }, 120);
      }

      setInterval(changeIcon, 2000);
    `,
  }}
/>
</ThemeProvider>
      </body>
    </html>
  );
}
