import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>

      <div className="text-center mt-24">

        <h1 className="text-5xl font-bold">
          Dhwani Queue Manager
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Welcome! Join a distribution queue or check your current status.
        </p>

      </div>

    </Layout>
  );
}