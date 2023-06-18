import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Meanings() {
  const params = useParams();
  const { id } = params;
  console.log(id);
  const idWord = id === undefined ? "apple" : id;
  const [cloze] = useState(idWord);

  const websites = [
    {
      web: `https://www.google.com/search?igu=1&ei=&q=${cloze} meaning`,
      id: 1,
      title: "google",
    },
    {
      web: `https://dictionary.cambridge.org/dictionary/english/${cloze}`,
      id: 2,
      title: "cambridge",
    },
    {
      web: `https://www.dictionary.com/browse/${cloze}`,
      id: 3,
      title: "dictionary",
    },
    {
      web: `https://www.thesaurus.com/browse/{cloze}`,
      id: 4,
      title: "thesaurus",
    },
    {
      web: `https://www.vocabulary.com/dictionary/${cloze}`,
      id: 5,
      title: "vocabulary",
    },
    {
      web: `https://www.urbandictionary.com/define.php?term=${cloze}`,
      id: 6,
      title: "urbandictionary",
    },
    {
      web: `https://en.wiktionary.org/wiki/${cloze}`,
      id: 7,
      title: "wiktionary",
    },
    {
      web: `https://www.thefreedictionary.com/${cloze}`,
      id: 8,
      title: "thefreedictionary",
    },
    {
      web: `https://www.wordhippo.com/what-is/another-word-for/${cloze}.html`,
      id: 9,
      title: "wordhippo",
    },
    {
      web: `https://visuwords.com/${cloze}`,
      id: 10,
      title: "visuwords",
    },
    {
      web: `https://www.pexels.com/search/${cloze}`,
      id: 11,
      title: "pexels",
    },
  ];

  return (
    <div className=" md:block">
      <div className="flex flex-wrap justify-center bg-zinc-100">
        {websites.map((eachWeb) => (
          <iframe
            key={eachWeb.id}
            credentialless="true"
            sandbox={
              eachWeb.title === "google" ? "allow-scripts" : "allow-same-origin"
            }
            scrolling="yes"
            title={eachWeb.title}
            className="h-[580px] w-[95vw] md:w-[340px] md:m-3 drop-shadow-2xl text-xs rounded-md border-8 md:border-4 border-amber-300"
            src={eachWeb.web}
          ></iframe>
        ))}
      </div>
      <a href="https://github.com/VijayAbba">GitHub </a>
    </div>
  );
}
