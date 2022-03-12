import React from "react";
import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../comments/Comments";
const QuoteDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>This is QuoteDetail page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
