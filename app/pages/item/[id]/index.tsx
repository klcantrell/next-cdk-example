import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }, { params: { id: "3" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const now = new Date();
  return {
    props: { timeString: `${now.toLocaleDateString()} ${now.toLocaleTimeString()}` },
    revalidate: 20,
  };
};

export default function ItemDetailPage({ timeString }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  return (
    <div className="flex justify-center mt-4">
      <h2>
        Item {router.query.id} {timeString}
      </h2>
    </div>
  );
}
