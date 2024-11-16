import Head from '~/components/shared/head';

const metadata = {
  title: 'Nurl | Where Tabletop Legends Are Made',
  description:
    'Enhance your games with automation that feels like magic, create new worlds with tools that feel sacred.',
};

export default function Home() {
  return (
    <main role="main">
      <Head {...metadata} />

      <h1>Home</h1>
    </main>
  );
}
