import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { AnchorHTMLAttributes, HTMLAttributes, ImgHTMLAttributes } from "react";

type MDXComponents = NonNullable<MDXRemoteProps["components"]>;

export const mdxComponents: MDXComponents = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-h1 text-[var(--color-text-dark)] mt-16 mb-6 first:mt-0"
      {...props}
    />
  ),
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-h2 text-[var(--color-text-dark)] mt-14 mb-5 first:mt-0"
      {...props}
    />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-h3 text-[var(--color-text-dark)] mt-10 mb-4"
      {...props}
    />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-body text-[var(--color-text-body)] my-5" {...props} />
  ),
  a: ({ href = "#", ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = /^https?:\/\//.test(href);
    const className =
      "text-[var(--color-accent)] underline underline-offset-[3px] decoration-[1px] hover:text-[var(--color-accent-hover)] transition-colors duration-[150ms]";
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          {...rest}
        />
      );
    }
    return <Link href={href} className={className} {...rest} />;
  },
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="my-6 pl-6 list-disc marker:text-[var(--color-accent)] space-y-2 text-body text-[var(--color-text-body)]"
      {...props}
    />
  ),
  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="my-6 pl-6 list-decimal marker:text-[var(--color-accent)] space-y-2 text-body text-[var(--color-text-body)]"
      {...props}
    />
  ),
  li: (props: HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-[1.7]" {...props} />
  ),
  img: ({ src, alt = "", ...rest }: ImgHTMLAttributes<HTMLImageElement>) => {
    if (!src || typeof src !== "string") return null;
    return (
      <figure className="my-8">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="w-full h-auto rounded-[8px] border border-[var(--color-border-card)]"
          {...(rest as Partial<ImageProps>)}
        />
        {alt && (
          <figcaption className="text-small text-[var(--color-text-body-light)] mt-3 text-center">
            {alt}
          </figcaption>
        )}
      </figure>
    );
  },
  blockquote: (props: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-8 pl-6 border-l-2 border-[var(--color-accent)] text-[18px] font-[400] italic text-[var(--color-text-dark)] leading-[1.6]"
      {...props}
    />
  ),
  code: (props: HTMLAttributes<HTMLElement>) => (
    <code
      className="font-mono text-[0.9em] px-1.5 py-0.5 rounded-[3px] bg-[var(--color-bg-surface)] text-[var(--color-text-dark)]"
      {...props}
    />
  ),
  pre: (props: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="my-6 p-5 rounded-[6px] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-mono text-[13px] leading-[1.6] overflow-x-auto"
      {...props}
    />
  ),
  hr: () => (
    <hr className="my-12 border-0 h-px bg-[var(--color-border-light)]" />
  ),
};
