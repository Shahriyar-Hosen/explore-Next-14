"use client";

import { NextPage } from "next";

// The normal single square bracket is present, but since there won't be any page inside the docs directly, the page will run directly on the slug. Therefore, an additional square bracket has been given.

const Docs: NextPage<{ params: { slug: string[] } }> = ({ params }) => {
  // /docs/feature[1]/concept[100]
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    // /docs/feature[1]
    return <h1>Viewing docs for feature {params.slug[0]}</h1>;
  }

  // /docs
  return (
    <div>
      <h1>Docs Home page</h1>
    </div>
  );
};

export default Docs;
