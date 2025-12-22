"use client";
import Head from "next/head";

type Props = { jsonLd: object };

export default function Seo({ jsonLd }: Props) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
