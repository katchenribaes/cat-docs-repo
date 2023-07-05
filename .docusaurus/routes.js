import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/online-shop/api/swagger',
    component: ComponentCreator('/online-shop/api/swagger', 'b1b'),
    exact: true
  },
  {
    path: '/online-shop/blog',
    component: ComponentCreator('/online-shop/blog', 'f77'),
    exact: true
  },
  {
    path: '/online-shop/blog/archive',
    component: ComponentCreator('/online-shop/blog/archive', '72a'),
    exact: true
  },
  {
    path: '/online-shop/blog/first-blog-post',
    component: ComponentCreator('/online-shop/blog/first-blog-post', '4a0'),
    exact: true
  },
  {
    path: '/online-shop/blog/long-blog-post',
    component: ComponentCreator('/online-shop/blog/long-blog-post', '6f8'),
    exact: true
  },
  {
    path: '/online-shop/blog/mdx-blog-post',
    component: ComponentCreator('/online-shop/blog/mdx-blog-post', '3d0'),
    exact: true
  },
  {
    path: '/online-shop/blog/tags',
    component: ComponentCreator('/online-shop/blog/tags', 'cf4'),
    exact: true
  },
  {
    path: '/online-shop/blog/tags/docusaurus',
    component: ComponentCreator('/online-shop/blog/tags/docusaurus', '9dd'),
    exact: true
  },
  {
    path: '/online-shop/blog/tags/facebook',
    component: ComponentCreator('/online-shop/blog/tags/facebook', 'ebc'),
    exact: true
  },
  {
    path: '/online-shop/blog/tags/hello',
    component: ComponentCreator('/online-shop/blog/tags/hello', '8b7'),
    exact: true
  },
  {
    path: '/online-shop/blog/tags/hola',
    component: ComponentCreator('/online-shop/blog/tags/hola', '33b'),
    exact: true
  },
  {
    path: '/online-shop/blog/welcome',
    component: ComponentCreator('/online-shop/blog/welcome', '50c'),
    exact: true
  },
  {
    path: '/online-shop/markdown-page',
    component: ComponentCreator('/online-shop/markdown-page', '26c'),
    exact: true
  },
  {
    path: '/online-shop/docs',
    component: ComponentCreator('/online-shop/docs', 'a04'),
    routes: [
      {
        path: '/online-shop/docs/about/overview',
        component: ComponentCreator('/online-shop/docs/about/overview', '870'),
        exact: true,
        sidebar: "about"
      },
      {
        path: '/online-shop/docs/intro',
        component: ComponentCreator('/online-shop/docs/intro', '883'),
        exact: true
      }
    ]
  },
  {
    path: '/online-shop/',
    component: ComponentCreator('/online-shop/', 'b84'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
