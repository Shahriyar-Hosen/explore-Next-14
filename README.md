![Component Hierarchy](https://github.com/Shahriyar-Hosen/explore-Next-14/assets/96829173/6ff9fca4-a4b0-4a2e-81d3-5f7e04d5d463)# Metadata

## Routing Metadata

Search engine optimization **(SEO)** is crucial for interesting visibility and attracting user.
Next.js introduced the metadata API which allows you to define metadata for each page.
Metadata ensures accurate and relevant information is displayed when your pages are shared or indexed.

## Configuring Metadata

- export static method object
- export a dynamic generatorMetadata function

### Metadata rules

Both layout.tsx and page.tsx files can export metadata. if defined as a layout it applies to all pages in the layout, but if defined in a page, it applies only to that page.

Metadata is read in order, from the root level down to the final page level.
When there's are metadata in multiple places for the same route, they get combined, but page metadata will replace layout metadata if they have the same properties.

#### Method -> 1

```tsx
export const metadata: Metadata = {
  title: "Single Product",
  description: "Product description",
};
```

```tsx
export const metadata: Metadata = {
  title: "Single Product",
  description: "Product description",
};
```

#### Method -> 2

```tsx
// define props types
export interface IParams {
  params: {
    productId: string;
  };
}

export const generateMetadata = ({ params }: IParams): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};
```

#### Method -> 3

```tsx
// define props types
export interface IParams {
  params: {
    productId: string;
  };
}

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
```

## Title Metadata

```tsx
export const metadata: Metadata = {
  title: {
    absolute: "", // If you want to use only this title without using any template then use absolute. usually, it is used on the page.tsx
    default: "Next.js 14 Tutorial", // suppose you didn't add metadata on the page.tsx then working on it.
    template: "%s | Next.js 14 Metadata", // if you add metadata to the page then that metadata replaces %s And other parts of the template will go with it.
  },
};
```


![Component Hierarchy](https://github.com/Shahriyar-Hosen/explore-Next-14/assets/96829173/188a962e-5b2b-4580-bca4-5e662522aba8)
