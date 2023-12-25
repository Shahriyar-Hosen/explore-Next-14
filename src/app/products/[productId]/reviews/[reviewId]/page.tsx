import { notFound } from "next/navigation";

const Review = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  if (Number(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Review {params.reviewId} for product {params.productId}
      </h1>
    </div>
  );
};

export default Review;
