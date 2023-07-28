import { GetServerSideProps, GetStaticPaths, GetStaticProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }, { params: { id: "3" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);
  return {
    props: { formattedDate },
    revalidate: 30,
  };
};

export default function ItemDetailPage({ formattedDate }: InferGetServerSidePropsType<typeof getStaticProps>) {
  const router = useRouter();
  return (
    <div className="flex justify-center mt-4">
      <h2>
        Item {router.query.id} {formattedDate}
      </h2>
    </div>
  );
}
