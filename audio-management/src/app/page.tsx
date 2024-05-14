import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen max-h-screen flex-col items-center justify-between p-24 font-mono">
      <div className="flex py-5 z-10 w-full max-w-5xl items-center justify-between  lg:flex">
        <h1>Manage Audio Files</h1>

        <div>
          Navigations | Create Audio with Transcripts | <Link href="/raw-data">Review Raw Audio</Link>
        </div>
      </div>

      <div className="flex-col font-mono">

        List of Transcripts

      </div>
    </main>
  );
}
