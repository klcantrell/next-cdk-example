import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async ({ res, params  }) => {
  if (params?.id === '1') {
    res.setHeader("Cache-Control", "public, max-age=30, s-maxage=60, stale-while-revalidate=30");
  }

  const now = new Date();
  return {
    props: { timeString: `${now.toLocaleDateString()} ${now.toLocaleTimeString()}` },
  };
};

export default function ItemDetailPage({ timeString }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  return (
    <div className="flex justify-center mt-4">
      <h2>
        Item {router.query.id} {timeString}
      </h2>
    </div>
  );
}
