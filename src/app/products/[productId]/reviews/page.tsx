const Reviews = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  return (
    <div>
      <h1>Product {params.productId}</h1>
      <h1>Reviews page</h1>
    </div>
  );
};

export default Reviews;
