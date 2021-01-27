import React from "react";
import { arrayOf, oneOfType, node, string, shape } from "prop-types";
import { setParams } from "@navikt/nav-dekoratoren-moduler";

const PageBase = (props) => {
  setParams({
    context: "privatperson",
    breadcrumbs: props.breadcrumbs,
  });

  return (
    <main role="main">
      <div className="container">{props.children}</div>
    </main>
  );
};

PageBase.propTypes = {
  breadcrumbs: arrayOf(
    shape({
      title: string,
      url: string,
    })
  ).isRequired,
  uniqueErrors: arrayOf(oneOfType([string])).isRequired,
  children: node.isRequired,
};

export default PageBase;
