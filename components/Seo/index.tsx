import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const Seo: React.FC<SEOProps> = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=7" />
      <title>{title}</title>
      <link
        rel="shortcut icon"
        type="images/png"
        href="../../images/favicon-32x32.png"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="DevR (Ratul_devR)" />
    </Head>
  );
};

export default Seo;
