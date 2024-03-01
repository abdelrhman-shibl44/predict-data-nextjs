const getPredictedData = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};
const name = async ({ params }: { params: { name: string } }) => {
  const data = await getPredictedData(params.name);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black  rounded-md shadow-lg shadow-black md:min-h-[12.5rem] md:min-w-[500px] flex items-start flex-col justify-center gap-y-8 p-5 md:p-none">
        <p>
          <span className="font-semibold capitalize text-green-500 px-5 text-lg ">
            name:
          </span>
          <span className="capitalize font-semibold text-blue-400">
            {data?.name || "abdelrhman"}
          </span>
        </p>
        <p>
          <span className="font-semibold capitalize text-green-500 px-5 text-lg ">
            count:
          </span>
          <span className="capitalize font-semibold text-blue-400">
            {data?.age || "25"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default name;
