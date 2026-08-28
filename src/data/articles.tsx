import type { ReactNode } from "react";

export interface Article {
  number: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  intro: string;
  content: ReactNode;
}

export const articles: Article[] = [
  {
    number: "01",

    slug: "building-digital-products-from-scratch",

    title: "Building Digital Products From Scratch",

    category: "DEVELOPMENT",

    date: "27 AUG 2026",

    readTime: "8 MIN READ",

    image: "/article-1.jpg",

    intro:
      "Sometimes the best way to learn is to build something yourself. This is the story behind how I approach building digital products from an idea into something real.",

    content: (
      <>
        <p>
          Building software is rarely just about writing code.
          Before the first line of code is written, there are
          problems to understand, decisions to make, and ideas
          that need to be transformed into something useful.
        </p>

        <p>
          For me, the most interesting part of development is
          the process of turning something that initially exists
          only as an idea into something that people can
          actually use.
        </p>

        <h2>The Problem</h2>

        <p>
          Every project usually starts with a problem.
          Sometimes it comes from everyday work, sometimes from
          an idea, and sometimes simply from curiosity.
        </p>

        <p>
          The challenge is turning that problem into a solution
          that is simple enough to understand and powerful
          enough to actually be useful.
        </p>

        <h2>The Approach</h2>

        <p>
          I usually start by breaking the problem into smaller
          pieces.
        </p>

        <p>
          What does the user actually need?
          Which parts are important?
          And which features can wait?
        </p>

        <blockquote>
          "Good software is not about having the most features.
          It's about solving the right problem."
        </blockquote>

        <h2>Building the Solution</h2>

        <p>
          Once the direction is clear, development becomes much
          easier. The technology becomes a tool rather than the
          center of the project.
        </p>

        <p>
          React, Laravel, Flutter, and other technologies become
          tools that allow ideas to become interfaces, systems,
          and experiences that people can actually use.
        </p>

        <h2>What I Learned</h2>

        <p>
          The biggest lesson is that building something is an
          iterative process.
        </p>

        <p>
          The first version does not need to be perfect.
          It simply needs to exist so it can be improved.
        </p>
      </>
    ),
  },
];