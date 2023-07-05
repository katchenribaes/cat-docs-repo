import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/onlineshop/api/swagger',
    component: ComponentCreator('/onlineshop/api/swagger', '290'),
    exact: true
  },
  {
    path: '/onlineshop/blog',
    component: ComponentCreator('/onlineshop/blog', '00d'),
    exact: true
  },
  {
    path: '/onlineshop/blog/archive',
    component: ComponentCreator('/onlineshop/blog/archive', '96b'),
    exact: true
  },
  {
    path: '/onlineshop/blog/first-blog-post',
    component: ComponentCreator('/onlineshop/blog/first-blog-post', '6b5'),
    exact: true
  },
  {
    path: '/onlineshop/blog/long-blog-post',
    component: ComponentCreator('/onlineshop/blog/long-blog-post', 'f3d'),
    exact: true
  },
  {
    path: '/onlineshop/blog/mdx-blog-post',
    component: ComponentCreator('/onlineshop/blog/mdx-blog-post', '7e8'),
    exact: true
  },
  {
    path: '/onlineshop/blog/tags',
    component: ComponentCreator('/onlineshop/blog/tags', 'c9f'),
    exact: true
  },
  {
    path: '/onlineshop/blog/tags/docusaurus',
    component: ComponentCreator('/onlineshop/blog/tags/docusaurus', '946'),
    exact: true
  },
  {
    path: '/onlineshop/blog/tags/facebook',
    component: ComponentCreator('/onlineshop/blog/tags/facebook', '2e3'),
    exact: true
  },
  {
    path: '/onlineshop/blog/tags/hello',
    component: ComponentCreator('/onlineshop/blog/tags/hello', '78d'),
    exact: true
  },
  {
    path: '/onlineshop/blog/tags/hola',
    component: ComponentCreator('/onlineshop/blog/tags/hola', '78b'),
    exact: true
  },
  {
    path: '/onlineshop/blog/welcome',
    component: ComponentCreator('/onlineshop/blog/welcome', '541'),
    exact: true
  },
  {
    path: '/onlineshop/markdown-page',
    component: ComponentCreator('/onlineshop/markdown-page', 'ad2'),
    exact: true
  },
  {
    path: '/onlineshop/docs',
    component: ComponentCreator('/onlineshop/docs', '169'),
    routes: [
      {
        path: '/onlineshop/docs/about/overview',
        component: ComponentCreator('/onlineshop/docs/about/overview', '47d'),
        exact: true,
        sidebar: "about"
      },
      {
        path: '/onlineshop/docs/intro',
        component: ComponentCreator('/onlineshop/docs/intro', '3c0'),
        exact: true
      }
    ]
  },
  {
    path: '/onlineshop/',
    component: ComponentCreator('/onlineshop/', '65b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
