export default function DS() {
  return (
    <>
      {/* <div className="grid-default">
        {Array.from({ length: 12 }, (_, i) => (
          <div className="h-10 w-full bg-green-500" />
        ))}
        <div className="h-10 col-[2_/_-2] bg-red-500" />
      </div> */}

      <div className="theme-dark bg-primary">
        <div className="xl:container xl:mx-auto px-4 xl:px-0 py-10">
          Responsive centered section with padding
        </div>
      </div>

      <div className="xl:container xl:mx-auto px-4 xl:px-0">
        <div className="py-6 withMargins ">
          <h1 className="">Heading 1</h1>
          <h2 className="">Heading 2</h2>
          <h3 className="">Heading 3</h3>
          <h4 className="">Heading 4</h4>
          <p className="">Paragraph</p>
          <preamble className="">Preamble</preamble>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, voluptate, quia voluptas quod quos
            exercitationem voluptatibus quas quidem doloribus. Quisquam
            voluptatum, quibusdam, voluptate, quia voluptas quod quos
            exercitationem.
          </p>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, voluptate, quia voluptas quod quos
            exercitationem voluptatibus quas quidem doloribus. Quisquam
            voluptatum, quibusdam, voluptate, quia voluptas quod quos
            exercitationem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, voluptate, quia voluptas quod quos
            exercitationem voluptatibus quas quidem doloribus. Quisquam
            voluptatum, quibusdam, voluptate, quia voluptas quod quos
            exercitationem.
          </p>
        </div>
      </div>
    </>
  );
}
