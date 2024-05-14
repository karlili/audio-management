import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raw file managment",
  description: "Raw file management",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>{children}</>);
}
