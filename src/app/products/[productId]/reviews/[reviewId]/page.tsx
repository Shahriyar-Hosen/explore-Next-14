const Review = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  return (
    <div>
      <h1>
        Review {params.reviewId} for product {params.productId}{" "}
      </h1>
    </div>
  );
};

export default Review;
