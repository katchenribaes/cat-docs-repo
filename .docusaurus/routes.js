import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/cat-docs-repo/api/swagger',
    component: ComponentCreator('/cat-docs-repo/api/swagger', 'dd8'),
    exact: true
  },
  {
    path: '/cat-docs-repo/blog',
    component: ComponentCreator('/cat-docs-repo/blog', 'aa1'),
    exact: true
  },
  {
    path: '/cat-docs-repo/blog/archive',
    component: ComponentCreator('/cat-docs-repo/blog/archive', '8c6'),
    exact: true
  },
  {
    path: '/cat-docs-repo/blog/first-blog-post',
    component: ComponentCreator('/cat-docs-repo/blog/first-blog-post', '197'),
    exact: true
  },
  {
    path: '/cat-docs-repo/blog/long-blog-post',
    component: ComponentCreator('/cat-docs-repo/blog/long-blog-post', '570'),
    exact: true
  },
  {
    path: '/cat-docs-repo/blog/mdx-blog-post',
    component: ComponentCreator('/cat-docs-repo/blog/mdx-blog-post', 'b0a'),
    exact: true
  },
  {
    path: '/cat-docs-repo/blog/tags',
    component: ComponentCreator('/cat-docs-repo/blog/tags', 'd99'),
    exact: true
  },
  {
    path: '/cat-docs-repo/blog/tags/docusaurus',
    component: ComponentCreator('/cat-docs-repo/blog/tags/docusaurus', 'fb3'),
    exact: true
  },
  {
    path: '/cat-docs-repo/blog/tags/facebook',
    component: ComponentCreator('/cat-docs-repo/blog/tags/facebook', '975'),
    exact: true
  },
  {
    path: '/cat-docs-repo/blog/tags/hello',
    component: ComponentCreator('/cat-docs-repo/blog/tags/hello', 'd6a'),
    exact: true
  },
  {
    path: '/cat-docs-repo/blog/tags/hola',
    component: ComponentCreator('/cat-docs-repo/blog/tags/hola', 'bce'),
    exact: true
  },
  {
    path: '/cat-docs-repo/blog/welcome',
    component: ComponentCreator('/cat-docs-repo/blog/welcome', '111'),
    exact: true
  },
  {
    path: '/cat-docs-repo/markdown-page',
    component: ComponentCreator('/cat-docs-repo/markdown-page', 'e51'),
    exact: true
  },
  {
    path: '/cat-docs-repo/docs',
    component: ComponentCreator('/cat-docs-repo/docs', '7b4'),
    routes: [
      {
        path: '/cat-docs-repo/docs/about/overview',
        component: ComponentCreator('/cat-docs-repo/docs/about/overview', '0d3'),
        exact: true,
        sidebar: "about"
      },
      {
        path: '/cat-docs-repo/docs/intro',
        component: ComponentCreator('/cat-docs-repo/docs/intro', 'f16'),
        exact: true
      }
    ]
  },
  {
    path: '/cat-docs-repo/',
    component: ComponentCreator('/cat-docs-repo/', '6b0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
