import { openGraphDefault } from "@/app/util/createMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer",
  description: "개발자에게 건의사항을 남겨보세요!",
  openGraph: {
    ...openGraphDefault,
    title: "Developer",
    description: "개발자에게 건의사항을 남겨보세요!",
  },
};

export default function DeveloperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full text-white">
      <section className="m-auto flex h-full w-full max-w-[80rem] flex-col gap-10">
        {children}
      </section>
    </div>
  );
}
