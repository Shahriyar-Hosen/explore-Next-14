import { Metadata } from "next";

export interface IParams {
  params: {
    productId: string;
  };
}

/* 
// Method -> 1
export const metadata: Metadata = {
  title: "Single Product",
  description: "Product description",
}; 
 */

/* 
// Method -> 2
export const generateMetadata = ({ params }: IParams): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};
 */

// Method -> 3
export const generateMetadata = async ({
  params,
}: IParams): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 1000);
  });

  return {
    title: `Product ${title}`,
  };
};

const Product = ({ params }: IParams) => {
  return (
    <div>
      <h1>Product {params.productId}</h1>
    </div>
  );
};

export default Product;
