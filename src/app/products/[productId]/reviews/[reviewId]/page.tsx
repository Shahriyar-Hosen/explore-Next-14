import { notFound } from "next/navigation";

const getRandomNumber = () => {
  return Math.floor(Math.random() * (10 - 0) + 0);
};

const Review = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  const random = getRandomNumber();
  console.log("🚀 ~ random:", random);

  if (random === 1) {
    throw new Error("Invalid random number");
  }

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
