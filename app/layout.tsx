export const metadata = {
  title: "Hindustan Helicopters",
  description: "PAN India Helicopter Booking Assistance",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}