# Metadata

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

## Component Hierarchy

![Component Hierarchy](https://github.com/Shahriyar-Hosen/explore-Next-14/assets/96829173/188a962e-5b2b-4580-bca4-5e662522aba8)

### Handling Errors in Layouts

An error.tsx file will handle errors for all its nested child segments

THe Error boundary does not catch errors thrown here because it's nested inside the layouts components

## Parallel Routes

<!-- img ⬆️👆🏻 -->

### Parallel Routes contd

- parallel routes in Next.js are defined using a feature known as slots.
- Slots help structure our content in a modular fashion
- To define a slot, we use the `@folder` naming convention
- Each slot is passed as a prop to its corresponding `layout.tsx` file.

<!-- scend img -->

### Parallel Routes Benefits

A clear benefit of parallel routes is their ability to split a single layout into various slots, making the code more manageable.

##### Independent route handling **sub-navigation**

### Independent Route Handling

Each slot of your layout, such as user analytics or revenue metrics, can have its own loading and error states.

This granular control is particularly beneficial in scenarios where different sections of the page load at varying speeds or encounter unique errors.

<!-- Independent Route Handling contd img -->

### Sub-navigation in routes

Each slot of your dashboard can essentially function as a mini-application, complete with its own navigation and state management.

This is especially useful in a complex application such as our dashboard where different sections serve distinct purposes.
